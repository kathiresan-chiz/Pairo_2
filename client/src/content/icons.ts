import {
  BarChart3, Boxes, Cable, Database, FileCheck, FolderKanban, GraduationCap, Handshake,
  Headset, Landmark, Link2, Settings2, ShoppingCart, Sparkles, TrendingUp, Users,
} from 'lucide-react'

export const moduleIcons = {
  finance: Landmark,
  sales: Handshake,
  purchase: ShoppingCart,
  inventory: Boxes,
  hr: Users,
  tax: FileCheck,
  projects: FolderKanban,
  analytics: BarChart3,
} as const

export const serviceIcons = [Settings2, Cable, Database, Link2, GraduationCap, Headset]
export const principleIcons = [Link2, Sparkles, TrendingUp]
