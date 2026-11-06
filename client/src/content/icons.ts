import { ParrotGlyph } from '../components/brand/ParrotIcon'
import {
  BarChart3, BookText, Boxes, Cable, Clock, Database, Factory, FileCheck, GraduationCap, Handshake,
  Headset, Landmark, Link2, Percent, PiggyBank, Settings2, ShieldCheck, ShoppingCart, Sparkles, TrendingUp,
} from 'lucide-react'

/** One icon per agentic solution (keys match solutions in pairo.ts). */
export const solutionIcons = {
  sales: Handshake,
  purchases: ShoppingCart,
  accounting: BookText,
  banking: Landmark,
  inventory: Boxes,
  manufacturing: Factory,
  gst: FileCheck,
  tds: Percent,
  reports: BarChart3,
  budgets: PiggyBank,
  control: ShieldCheck,
  parrot: ParrotGlyph,
} as const

export const solutionIcon = (key: string) => solutionIcons[key as keyof typeof solutionIcons]

/** GST, TDS · TCS, Books & audit, MSME */
export const lawIcons = [FileCheck, Percent, BookText, Clock]

export const serviceIcons = [Settings2, Cable, Database, Link2, GraduationCap, Headset]
export const principleIcons = [Link2, Sparkles, TrendingUp]
