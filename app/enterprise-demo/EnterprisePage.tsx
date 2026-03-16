'use client'

import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import SectionLayout from '@/shared/components/molecules/FeaturePages/SectionLayout'
import FeaturePageHeader from '@/shared/components/molecules/FeaturePages/FeaturePageHeader'
import IconTitleDescriptionCardGrid from '@/shared/components/molecules/FeaturePages/IconTitleDescriptionCard'
import FeaturePageLayout from '@/shared/components/molecules/FeaturePages/FeaturePageLayout'
import CustomerStoriesSection from '@/shared/components/molecules/FeaturePages/CustomerStoriesSection'
import {
  HIGH_GROWTH_TEAMS_CARDS,
  NUMBERS_THAT_SPEAK_CARDS,
  TRUSTED_BY_LOGOS,
  OBSERABILITY_LANDSCAPE_CARDS,
} from './EnterprisePage.constants'
import TrackingLink from '@/components/TrackingLink'
import Image from 'next/image'
import ButtonGroup from '@/shared/components/molecules/FeaturePages/ButtonGroup'
import HeroCards from '@/shared/components/molecules/FeaturePages/HeroCards'
import RoundedCardGrid from '@/shared/components/molecules/FeaturePages/RoundedCardGrid'

const Header: React.FC = () => {
  const headerButtons = [
    {
      text: 'Get Started - Free',
      href: '/teams/',
      variant: 'default' as const,
      className: 'flex-center',
      tracking: {
        clickType: 'Primary CTA',
        clickName: 'Enterprise Hero Start Trial',
        clickLocation: 'Enterprise Hero',
        clickText: 'Get Started - Free',
      },
    },
    {
      text: 'Book a demo',
      href: '/book-a-demo/',
      variant: 'secondary' as const,
      className: 'flex-center',
      tracking: {
        clickType: 'Secondary CTA',
        clickName: 'Enterprise Hero Book a demo',
        clickLocation: 'Enterprise Hero',
        clickText: 'Book a demo',
      },
    },
  ]

  return (
    <FeaturePageHeader
      title={
        <>
          SigNoz <br /> Enterprise observability, built for the AI era.
        </>
      }
      description={
        <>
          Logs, metrics, traces, and LLM observability unified in a single OpenTelemetry-native
          platform. <br className="hidden md:block" /> Built for engineering teams, from start up to
          scale. 100% Predictable & Transparent Pricing.
        </>
      }
      buttons={headerButtons}
      sectionLayoutClassName="!mt-0 !border-x-1 !border-dashed !border-signoz_slate-400 max-md:-mb-[3rem]"
      heroImageAlt="Enterprise observability hero"
      heroImage="/img/platform/ClickStackAlternativeMeta.webp"
      buttonDescription={
        <div className="text-center text-sm text-signoz_vanilla-400">
          No 45-minute intro call. Engineers talk to engineers.
        </div>
      }
    />
  )
}

const TrustedByTeams: React.FC = () => {
  return (
    <div className="relative mx-auto flex max-w-8xl flex-col items-center justify-center gap-6 overflow-hidden border !border-b-0 !border-t-0 border-dashed border-signoz_slate-400 py-16 md:w-[80vw]">
      <div className="text-center text-sm font-semibold uppercase tracking-[0.05em] text-signoz_vanilla-400">
        Trusted by the <span className="text-signoz_vanilla-100">best platform teams</span>
      </div>
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-16 gap-y-8 px-4">
        {TRUSTED_BY_LOGOS.map((logo, index) => (
          <div key={index} className="flex h-12 items-center justify-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={48}
              className="object-contain"
            />
          </div>
        ))}
      </div>
      <div className="w-full text-center">
        <Button
          variant="secondary"
          rounded="full"
          className="mx-auto flex w-fit items-center gap-2"
          asChild
        >
          <TrackingLink
            href="/case-study/"
            clickType="Secondary CTA"
            clickName="Observability for AI Native Companies Customer Stories Button"
            clickLocation="Observability for AI Native Companies Testimonials"
            clickText="Read customer stories"
          >
            <span>Read customer stories</span>
            <ArrowRight size={14} />
          </TrackingLink>
        </Button>
      </div>
    </div>
  )
}

const HighGrowthTeams: React.FC = () => {
  return (
    <section className="relative mx-auto max-w-8xl overflow-hidden border !border-b-0 !border-t-0 border-dashed border-signoz_slate-400 md:w-[80vw]">
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center">
        <div className="flex flex-col items-center gap-14 text-2xl font-medium leading-[3.25rem] text-signoz_sienna-100">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-center text-4xl font-semibold text-signoz_vanilla-100">
              <span className="text-[#FF3B23]">#1</span> Observability Platform for{' '}
              <br className="hidden md:block" /> High-Growth Engineering Teams
            </h2>
            <div className="text-center text-base text-signoz_vanilla-100">
              Every signal type. One backend. Built on open standards.{' '}
              <br className="hidden md:block" /> Advanced observability for micro services to LLMs.
            </div>
          </div>
          <SectionLayout variant="no-border" className="!mx-auto !p-0">
            <IconTitleDescriptionCardGrid cards={HIGH_GROWTH_TEAMS_CARDS} variant="lg" />
          </SectionLayout>
        </div>
      </div>
    </section>
  )
}

const BetterChoiceBanner: React.FC = () => {
  return (
    <SectionLayout
      variant="bordered"
      className="flex flex-col items-center justify-center gap-10 !py-20"
    >
      <h2 className="mb-6 text-center text-4xl text-signoz_vanilla-100">
        Observability Landscape is changing. <br /> Are you Ready?
      </h2>
      {/* <IconTitleDescriptionCardGrid cards={OBSERABILITY_LANDSCAPE_CARDS} variant="lg" /> */}
      <RoundedCardGrid cards={OBSERABILITY_LANDSCAPE_CARDS} cols={4} variant={'cherry'} />
    </SectionLayout>
  )
}

const NumbersThatSpeak: React.FC = () => {
  return (
    <div className="border-y-1 border-dashed border-signoz_slate-400 bg-signoz_ink-500 py-16">
      <div className="mx-auto my-8 max-w-4xl p-6">
        <h2 className="my-4 text-center text-4xl font-semibold text-signoz_vanilla-100">
          Numbers that speak for themselves
        </h2>
      </div>

      <HeroCards
        cards={NUMBERS_THAT_SPEAK_CARDS}
        layoutVariant={'no-border'}
        variant="combined"
        className="px-6"
      />
    </div>
  )
}

const EnterpriseObservability: React.FC = () => {
  const buttons = [
    {
      text: 'Book a demo',
      href: '/book-a-demo/',
      variant: 'secondary' as const,
      className: 'flex-center',
    },
    {
      text: 'Get Started - Free',
      href: '/teams/',
      variant: 'default' as const,
      className: 'flex-center',
    },
  ]

  return (
    <SectionLayout
      variant="bordered"
      className="flex flex-col items-center justify-center gap-6 !px-0 !py-16"
    >
      <h2 className="mx-auto mb-6 max-w-2xl text-center text-4xl font-semibold text-signoz_vanilla-100">
        Enterprise Observability that scales with you.
        <br /> <span className="text-[#FF3B23]">No Pricing Shocks. Guaranteed.</span>
      </h2>
      <p className="mx-auto max-w-2xl text-center text-base text-signoz_vanilla-100">
        30 minutes with a SigNoz Observability Expert. We will show you what your stack looks like
        unified, and give you a predictable cost model you can trust from Day Zero.
      </p>
      <div className="flex flex-col items-center justify-center gap-4">
        <ButtonGroup buttons={buttons} />
        <p className="text-center text-sm text-signoz_vanilla-400">
          No sales deck. No 45-minute intro call. Engineers talk to engineers.
        </p>
      </div>
    </SectionLayout>
  )
}

const EnterpriseDemoPage: React.FC = () => {
  return (
    <FeaturePageLayout>
      <Header />
      <TrustedByTeams />
      <BetterChoiceBanner />

      <SectionLayout variant="bordered" className="!px-0">
        <HighGrowthTeams />

        <CustomerStoriesSection
          tracking={{
            clickName: 'Enterprise Demo Customer Stories Button',
            clickLocation: 'Enterprise Demo Testimonials',
          }}
        />

        <NumbersThatSpeak />
        <EnterpriseObservability />
      </SectionLayout>
    </FeaturePageLayout>
  )
}

export default EnterpriseDemoPage
