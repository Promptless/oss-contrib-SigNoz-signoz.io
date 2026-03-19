'use client'

import React, { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { QUERY_PARAMS } from '@/constants/queryParams'
import { ONBOARDING_SOURCE } from '@/constants/globals'

// Type for tab item props
type TabItemProps = {
  value?: string
  default?: boolean
  label?: string
  children?: React.ReactNode
}

// Type guard to check if the element is a valid React element with TabItem props
const isValidTabElement = (element: unknown): element is React.ReactElement<TabItemProps> => {
  return React.isValidElement(element)
}

interface TabsProps {
  children: React.ReactNode
  entityName?: string
}

function TabsInner({ children, entityName }: TabsProps) {
  const searchParams = useSearchParams()

  const environment = searchParams.get(QUERY_PARAMS.ENVIRONMENT)
  const source = searchParams.get(QUERY_PARAMS.SOURCE)

  // Ensure children is always an array
  const childrenArray = React.Children.toArray(children)

  const firstValidChild = childrenArray.find(isValidTabElement)
  const defaultChild = childrenArray.find(
    (child): child is React.ReactElement<TabItemProps> =>
      isValidTabElement(child) && !!child.props.default
  )
  const defaultActiveTab: string | null =
    defaultChild?.props.value ?? firstValidChild?.props.value ?? null

  let selectedTab: string | null
  if (entityName === 'plans') {
    selectedTab = defaultActiveTab
  } else if (
    environment &&
    childrenArray.some(
      (child): child is React.ReactElement<TabItemProps> =>
        isValidTabElement(child) && child.props.value === environment
    )
  ) {
    // If environment matches a tab value directly, use it
    selectedTab = environment
  } else if (environment) {
    // If environment is set but doesn't match any tab directly, use default tab
    selectedTab = defaultActiveTab
  } else {
    // No environment parameter, use default tab
    selectedTab = defaultActiveTab
  }
  const [activeTab, setActiveTab] = useState<string | null>(selectedTab)
  const hideSelfHostTab = source === ONBOARDING_SOURCE && entityName === 'plans'

  return (
    <TabsUI
      childrenArray={childrenArray}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      hideSelfHostTab={hideSelfHostTab}
    />
  )
}

function TabsFallback({ children }: TabsProps) {
  const childrenArray = React.Children.toArray(children)

  const firstValidChild = childrenArray.find(isValidTabElement)
  const defaultChild = childrenArray.find(
    (child): child is React.ReactElement<TabItemProps> =>
      isValidTabElement(child) && !!child.props.default
  )
  const defaultActiveTab: string | null =
    defaultChild?.props.value ?? firstValidChild?.props.value ?? null
  const [activeTab, setActiveTab] = useState<string | null>(defaultActiveTab)

  return (
    <TabsUI
      childrenArray={childrenArray}
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      hideSelfHostTab={false}
    />
  )
}

interface TabsUIProps {
  childrenArray: React.ReactNode[]
  activeTab: string | null
  setActiveTab: React.Dispatch<React.SetStateAction<string | null>>
  hideSelfHostTab: boolean
}

function TabsUI({ childrenArray, activeTab, setActiveTab, hideSelfHostTab }: TabsUIProps) {
  return (
    <div className="w-full" data-tabs-root>
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        {childrenArray.map((child) => {
          if (!isValidTabElement(child)) return null
          const { value, label } = child.props as TabItemProps

          if (hideSelfHostTab && value === 'self-host') return null
          return (
            <button
              key={value}
              data-tab-value={value}
              className={`border-b-2 px-4 py-2 text-sm font-medium focus:outline-none ${
                activeTab === value
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200'
              }`}
              onClick={() => setActiveTab(value ?? null)}
            >
              {label}
            </button>
          )
        })}
      </div>
      <div className="mt-4">
        {childrenArray.map((child) => {
          if (!isValidTabElement(child)) return null
          const props = child.props as TabItemProps
          if (hideSelfHostTab && props.value === 'self-host') return null

          const isActive = props.value === activeTab
          return (
            <div key={props.value} data-tab-value={props.value} hidden={!isActive}>
              {props.children}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const Tabs = (props: TabsProps) => {
  return (
    <Suspense fallback={<TabsFallback {...props} />}>
      <TabsInner {...props} />
    </Suspense>
  )
}

export default Tabs
