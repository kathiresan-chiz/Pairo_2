/**
 * PairoApps product content, taken from the "PairO Website" HTML page
 * (agentic solutions, Parrot AI, Health Check, compliance, pricing).
 * Pages render this through the existing section components; no design lives here.
 */
import type { EtchName } from '../components/ui'

export type FlagStep = { b: string; d: string; title: string; lines: string[] }
/** [what happens, what the agent does, detail] */
export type Off = [string, string, string]
/** [what you do today, minutes, what the agent does, auto | approve] */
export type Task = [string, number, string, 'auto' | 'approve']

export type Solution = {
  key: string
  name: string
  em: string
  live: string
  line: string
  sub: string
  chips: string[]
  agent: string[]
  asks: string[]
  flow: string[]
  features: [string, string][]
  flagship: { eyebrow: string; title: string; steps: FlagStep[]; rules: string[]; offs: Off[]; note: string }
  vs: { human: string; agent: string; tasks: Task[]; foot: [string, string][]; note: string }
  image: EtchName
  image2: EtchName
}

const s = (b: string, d: string, title: string, ...lines: string[]): FlagStep => ({ b, d, title, lines })

export const solutions: Solution[] = [
  {
    key: 'sales', name: 'Sales and receivables', em: 'Sales', live: 'Sales agent', image: 'm-retail', image2: 'm-office',
    line: 'Collection agent follows up on every due invoice',
    sub: 'From enquiry to cash, with GST right on every invoice.',
    chips: ['Settled bill by bill', 'Collection agent', 'Credit limits'],
    agent: ['Collection agent follows up on every due invoice', 'Raises recurring invoices on schedule', 'Holds orders that cross credit limits'],
    asks: ['Who owes us the most?', 'Invoice Kumar 40 bags cement'],
    flow: ['Quote', 'Order', 'Invoice', 'Receipt'],
    features: [['Settled bill by bill', 'Every receipt knocks off the right invoices.'], ['Collection agent', 'Follows up, reads replies, stops on payment.'], ['Credit limits', 'Orders over limit wait for you.']],
    flagship: {
      eyebrow: 'Collection agent', title: 'It follows up. You get paid.',
      steps: [
        s('3 days before due', 'Tone: friendly.', 'Draft email', 'Just a friendly note — INV-1031 for ₹1,20,000 falls due on 8 Nov.', 'Pay ₹1,20,000 by UPI · statement attached'),
        s('Due day', 'Tone: friendly.', 'Draft email', 'INV-1031 for ₹1,20,000 is due today. You can pay in one tap with the UPI link below.', 'Ready · approve, then sent at 10:00 am'),
        s('3 days overdue', 'Tone: gentle.', 'Draft email', 'A gentle reminder — ₹1,20,000 on INV-1031 is now 3 days past due.'),
        s('7 days overdue', 'Tone: polite, firm.', 'Draft email', 'INV-1031 is 7 days overdue. Please arrange payment, or let us know a date that works.'),
        s('15 days overdue', 'Tone: firm.', 'Draft email', '₹1,20,000 on INV-1031 has been outstanding for 15 days. Kindly clear it this week.'),
        s('30 days overdue', 'Tone: final.', 'Draft email', 'This is our final reminder for INV-1031, now 30 days overdue. Please settle it at the earliest.'),
      ],
      rules: ['Approval first', 'Autopilot per customer', '9 am – 8 pm only', 'Max 1 in 3 days', 'Stops on payment', 'English · தமிழ் · हिन्दी'],
      offs: [
        ['Will pay on Friday', 'Promise logged', 'Reminder that day if unpaid'],
        ['Wrong amount', 'Dispute', "Reminders pause · you're told"],
        ['Already paid, UTR 4471…', 'Bank checked', 'Not found? Asks for the UTR'],
        ['Pays by UPI', 'Matched by invoice no.', 'Reminders stop'],
      ],
      note: "Collections: Standard and up · Autopilot: Professional and up · UPI pay links: every pack · Written from PairoApps' own templates, never an outside AI.",
    },
    vs: {
      human: '≈ 4 h 10 min a week', agent: '≈ 10 min of yours',
      tasks: [
        ['Type each monthly invoice', 45, '14 recurring invoices raised & emailed', 'auto'],
        ['Match bank receipts to invoices', 60, '23 invoices settled from bank lines', 'auto'],
        ['Phone overdue customers', 90, 'Email follow-ups + UPI links to 9', 'auto'],
        ['Check credit before dispatch', 30, 'Order over credit limit — held', 'approve'],
        ['Update the ageing sheet', 25, 'Ageing updated live', 'auto'],
      ],
      foot: [['4 h → 10 min', 'a week on receivables'], ['1 tap', 'all you approve'], ['0', 'spreadsheets']],
      note: 'Illustrative week for a business raising about 200 invoices a month.',
    },
  },
  {
    key: 'purchases', name: 'Purchases and payables', em: 'Purchases', live: 'Purchase agent', image: 'm-port', image2: 'm-warehouse',
    line: 'Reads supplier bills from photos and PDFs',
    sub: 'Order to pay, with three-way matching and TDS at the bill.',
    chips: ['Three-way match', 'Bills from photos', 'ITC protected'],
    agent: ['Reads supplier bills from photos and PDFs', 'Matches PO, GRN and bill — flags gaps', "Proposes the week's payment run"],
    asks: ['Which bills are due this week?', 'Book this bill'],
    flow: ['Request', 'PO', 'GRN', 'Bill', 'Pay'],
    features: [['Three-way match', 'PO, GRN and bill must agree.'], ['Bills from photos', 'Snap it — Parrot AI drafts it.'], ['ITC protected', 'Blocked credits flagged at entry.']],
    flagship: {
      eyebrow: 'Bill inbox · three-way match', title: "Snap the bill. It's booked right.",
      steps: [
        s('Send it', 'WhatsApp a photo or PDF, or upload it.', 'Bill inbox', 'bill_0412.jpg · from Priya on WhatsApp', 'Received · virus-scanned · stored'),
        s("Read on PairoApps' server", 'Text layer or local OCR. No outside AI.', 'Read', 'Sri Balaji Steels · GSTIN ✓', 'B-882 · 4 Nov 2026 · ₹1,18,000'),
        s('Checked', 'Totals within ₹1, GSTIN, dates, GST rate, place of supply.', 'Checks', 'Totals agree ✓', 'CGST + SGST for Tamil Nadu ✓'),
        s('Duplicate guard', 'Same supplier and invoice number already booked? Flagged, never dropped.', 'Duplicates', 'No earlier B-882 from this supplier ✓'),
        s('Three-way match', 'Bill only what was received; rate against the PO within your tolerance.', 'PO · GRN · bill', 'PO-114 · 500 kg × ₹62', 'GRN-208 · 480 kg', 'Bill · 480 kg × ₹62 ✓'),
        s('You confirm', 'The draft posts only when a person confirms. The image stays as ITC evidence.', 'Draft purchase bill', 'Ready for your confirm', 'Posted · bill image attached'),
      ],
      rules: ['Nothing posts without you', 'Blank rather than a guess', "Learns each supplier's layout", 'Price policy: off · warn · block', 'Overrides need a reason'],
      offs: [
        ['Same bill sent twice', 'Flagged as duplicate', 'It would claim ITC twice'],
        ['Rate above the PO', 'Warn or block', 'Override with a reason, audited'],
        ['Billed more than received', 'Refused', 'Only what the GRN received'],
        ['Blurry photo', 'Fields left blank', 'Fill in or re-read'],
      ],
      note: 'Bill inbox and three-way match: every pack · Bill reads a month: Free 25 · Standard 100 · Professional 200 · Plus 1,000 · Enterprise 3,000 · WhatsApp needs your business number set up.',
    },
    vs: {
      human: '≈ 5 h a week', agent: '≈ 15 min of yours',
      tasks: [
        ['Type bills from paper and PDFs', 80, '31 bills read from photos and PDFs', 'auto'],
        ['Tick PO and GRN against each bill', 60, 'PO · GRN · bill matched, 2 gaps flagged', 'auto'],
        ['Check ITC eligibility', 40, 'Blocked ITC flagged at entry', 'auto'],
        ['List what to pay this week', 50, 'Payment run proposed · ₹8.4 L', 'approve'],
        ['Hunt duplicate bills', 70, 'Duplicate bill stopped', 'auto'],
      ],
      foot: [['5 h → 15 min', 'a week on bills'], ['1 tap', 'to release payments'], ['0', 'duplicate payments']],
      note: 'Illustrative week for a business booking about 120 supplier bills a month.',
    },
  },
  {
    key: 'accounting', name: 'Accounting', em: 'Accounting', live: 'Books agent', image: 'm-office', image2: 'm-analyst',
    line: 'Posts recurring journals and accruals',
    sub: 'A general ledger an auditor is comfortable with.',
    chips: ['Audit trail', 'Period locks', '3 companies'],
    agent: ['Posts recurring journals and accruals', 'Spots unusual entries before you do', 'Prepares the month-end close checklist'],
    asks: ['Why is October profit lower?', 'Show cash in hand today'],
    flow: ['Entry', 'Approve', 'Post', 'Close'],
    features: [['Audit trail', 'Always on, as the Act requires.'], ['Period locks', 'Closed months stay closed.'], ['3 companies', 'Consolidated in one view.']],
    flagship: {
      eyebrow: 'Period locks · year-end close', title: 'Close the month. Keep it closed.',
      steps: [
        s('Lock the period', 'A supervisor locks a month. Posting inside it is refused.', 'Period locks', 'October 2026 · locked by Ravi', 'Entry dated 14 Oct → refused'),
        s('One-entry permit', 'Allow one entry for 24 hours instead of unlocking.', 'Permit', '1 entry · Priya · journal', 'Valid until 6 Nov, 10:00', 'Used once, then gone'),
        s('Under audit', 'The year moves Active → Under audit → Closed.', 'FY 2025-26', 'Under audit', 'Auditor reviewing'),
        s('Close the year', 'Closes and locks the whole year in one step.', 'FY 2025-26', 'Closed ✓', 'Year lock applied'),
        s('Carried forward, live', "Closing balances are next year's openings. Profit sits in Reserves and Surplus.", 'Balance sheet · FY 2026-27', 'P&L brought forward ₹38.4 L', 'Under Reserves and Surplus'),
        s('Reopen only with reason', 'Admin only, latest year only, with a written reason.', 'Reopen', 'Reason required', 'Can go to a second approver'),
      ],
      rules: ['Existing entries never touched', 'Unlocking needs a reason', 'Every step audited', 'Optional year-end transfer journal', 'Closing stock split by class'],
      offs: [
        ['Entry in a locked month', 'Refused', 'Ask for a one-entry permit'],
        ['Two people, one permit', 'Only the first', 'Used up at once'],
        ['Reopen an older year', 'Not allowed', 'Only the latest closed year'],
        ['Closing stock entry missing', 'Warning', 'Shown on P&L and balance sheet'],
      ],
      note: 'Period locks and year close: every pack · Under-audit step: Professional and up.',
    },
    vs: {
      human: '≈ 6 h a month-end', agent: '≈ 20 min of yours',
      tasks: [
        ['Post recurring journals by hand', 60, '18 recurring journals posted', 'auto'],
        ['Calculate and post accruals', 70, 'Accruals and prepaids posted', 'auto'],
        ['Scan entries for mistakes', 90, '3 unusual entries flagged', 'auto'],
        ['Chase approvals by email', 60, '2 journals waiting for you', 'approve'],
        ['Tick a month-end checklist', 80, 'Period locked · profit carried forward', 'auto'],
      ],
      foot: [['8 days → Day 0', 'month-end close'], ['2 taps', 'all you approve'], ['100%', 'audit trail']],
      note: 'Illustrative month-end for a single company.',
    },
  },
  {
    key: 'banking', name: 'Banking', em: 'Banking', live: 'Banking agent', image: 'm-city-bridge', image2: 'm-office',
    line: 'Matches statement lines every morning',
    sub: 'Bank reconciled daily, not at month end.',
    chips: ['Auto-match', 'Bank rules', 'Duplicate guard'],
    agent: ['Matches statement lines every morning', 'Learns rules from your corrections', 'Stops a duplicate payment before release'],
    asks: ["What's unreconciled?", "Did Ravi's payment come in?"],
    flow: ['Import', 'Match', 'Reconcile'],
    features: [['Auto-match', 'With the reason shown.'], ['Bank rules', 'Recurring lines post themselves.'], ['Duplicate guard', 'Same bill never paid twice.']],
    flagship: {
      eyebrow: 'Statement import · auto-match', title: 'Your bank, reconciled every morning.',
      steps: [
        s('Statement arrives', 'Upload CSV or Excel, or have it emailed, dropped by SFTP or pulled on a schedule.', 'HDFC · statement', '220 lines received', '6 duplicate lines left out'),
        s('Auto-match', 'Within ±3 days (your setting). Exact amount and reference → reconciled.', 'Matching', '198 reconciled automatically'),
        s('Suggestions', 'Close matches get a confidence score. Ties come to you.', 'Suggested', '14 suggested · up to 90%', '2 ties · you pick'),
        s('Categorise the rest', 'Invoice number in the UPI note, party names, keywords, your own rules.', 'Categorised', 'UPI/KUMAR CON → INV-1031', 'Bank charges → GST on charges'),
        s('Drafts, then post', 'Each line becomes a draft voucher. Posting is your confirm.', 'Drafts', '8 draft vouchers', 'Post all → you confirm'),
      ],
      rules: ['Never picks silently', "Rejected suggestions don't return", 'Rules: contains · starts with · exact · pattern', 'Shows how many other lines a rule matches', 'Duplicate warning on new entries'],
      offs: [
        ['Same statement twice', 'Skipped', 'Only new lines are added'],
        ['Two entries equally likely', 'Both shown', 'You pick one'],
        ['Amount only within tolerance', 'Suggested, not matched', 'Score reduced'],
        ['No match at all', 'Draft by rule or keyword', 'You post it'],
      ],
      note: 'Banking: every pack (Free: 1 account, manual import) · Automatic statement feeds by email, SFTP or URL: Standard and up · Direct bank connections are not offered yet.',
    },
    vs: {
      human: '≈ 4 h a week', agent: '≈ 10 min of yours',
      tasks: [
        ['Download and paste statements', 30, 'Statement imported', 'auto'],
        ['Match lines one by one', 100, '212 of 220 lines matched, with reasons', 'auto'],
        ['Find who sent UPI amounts', 50, 'UPI payers identified from history', 'auto'],
        ['Book charges and interest', 30, '8 lines need your call', 'approve'],
        ['Prepare the BRS', 40, 'BRS ready for any date', 'auto'],
      ],
      foot: [['4 h → 10 min', 'a week on banking'], ['8', 'lines you decide'], ['Daily', 'reconciled']],
      note: 'Illustrative week for one current account with about 220 lines.',
    },
  },
  {
    key: 'inventory', name: 'Inventory', em: 'Inventory', live: 'Stock agent', image: 'm-warehouse', image2: 'm-port',
    line: 'Warns on reorder levels and expiry',
    sub: 'Stock you can value, verify and report under Schedule III.',
    chips: ['RM · WIP · FG', 'Batches & expiry', 'Branch transfers'],
    agent: ['Warns on reorder levels and expiry', 'Flags GRNs not yet billed', 'Values stock at cost or NRV'],
    asks: ["What's below reorder level?", 'Stock of cement in Madurai'],
    flow: ['Receive', 'Store', 'Move', 'Count'],
    features: [['RM · WIP · FG', 'Classes that drive accounts.'], ['Batches & expiry', 'FEFO picking by default.'], ['Branch transfers', 'With GST, done right.']],
    flagship: {
      eyebrow: 'Inventory classes · physical count', title: 'Every item in its Schedule III class.',
      steps: [
        s('Classify', '8 classes: raw materials, packing, WIP, finished goods, stock-in-trade, stores, tools, consumables.', 'Cement 53 grade', 'Class: stock-in-trade', 'Ledger: stock-in-trade inventory'),
        s('Value', 'Weighted average (default), standard or last cost.', 'Valuation', 'Weighted average · ₹420 a bag', 'Price differences → variance ledger'),
        s('Reclassify', 'Change the class; a stock journal moves the value.', 'Reclassified', 'Raw materials → finished goods', '₹1.2 L moved by stock journal'),
        s('Count', 'Book stock is snapshotted; counts are entered.', 'Madurai count', '412 items · snapshot 10:00', 'Counts entered'),
        s('Freeze and approve', 'Counted items frozen; someone else approves the variance.', 'Count controls', 'Freeze on counted items', 'Approver is not the counter ✓'),
        s('Post differences', 'Each difference is a draft stock journal for you to post.', 'Differences', '−2 bags · +1 tin', 'Post or reject each'),
      ],
      rules: ['Inventories note by class', 'Schedule III P&L by class', 'Differences never auto-posted', 'Count by session', 'Freeze lift needs a reason'],
      offs: [
        ['Item reclassified with stock', 'Value moved', 'Stock journal between class ledgers'],
        ['Movement during a frozen count', 'Refused', 'Until the count is done'],
        ['Approver started the count', 'Not allowed', 'Segregation of duties'],
        ['Back-dated purchase', 'Later sales not re-costed', 'Costs stay predictable'],
      ],
      note: 'Classes and valuation: core inventory · Physical count: Standard and up · Freeze and variance approval: Enterprise · Batches: Professional and up.',
    },
    vs: {
      human: '≈ 5 h a week', agent: '≈ 15 min of yours',
      tasks: [
        ['Update stock sheet after each GRN', 70, 'Stock updated on every GRN and invoice', 'auto'],
        ['Check reorder levels', 40, 'Reorder list ready · 6 items', 'auto'],
        ['Watch batch expiry', 40, 'Expiring batches picked first', 'auto'],
        ['List GRNs not billed', 50, '4 GRNs not billed · follow up?', 'approve'],
        ['Value closing stock', 100, 'Stock valued at cost or NRV', 'auto'],
      ],
      foot: [['5 h → 15 min', 'a week on stock'], ['0', 'negative stock'], ['Live', 'valuation']],
      note: 'Illustrative week for two warehouses with about 400 items.',
    },
  },
  {
    key: 'manufacturing', name: 'Manufacturing', em: 'Manufacturing', live: 'Production agent', image: 'm-factory', image2: 'm-warehouse',
    line: 'Plans material needs from orders',
    sub: 'Plan, make and cost production with confidence.',
    chips: ['Multi-level BOM', 'MRP', 'Job work'],
    agent: ['Plans material needs from orders', 'Backflushes consumption on completion', 'Gives a can-we-deliver date'],
    asks: ['Can we deliver 500 units by Friday?', 'What should we buy?'],
    flow: ['BOM', 'Plan', 'Produce', 'Finish'],
    features: [['Multi-level BOM', 'Backflush on completion.'], ['MRP', 'What to buy, when.'], ['Job work', 'ITC-04 ready.']],
    flagship: {
      eyebrow: 'MRP · backflush', title: 'Know what to buy, what to make, and when.',
      steps: [
        s('Demand', 'Open sales orders, approved forecasts, safety stock and order components.', 'MRP · nightly run', 'SO-224 · 500 units', 'Forecast December · 300 units'),
        s('Supply', 'Stock, goods in transit, open POs and production orders.', 'Supply', 'On hand 180 · on order 120'),
        s('Net level by level', 'Lead-time offsets and lot rules: lot-for-lot, fixed, minimum, multiples.', 'Netting', 'Steel short 2 t · order by 9 Nov'),
        s('Suggestions', 'Buy, make, reschedule or cancel. Each says why.', 'Suggested', 'Buy steel 2 t · Sri Balaji Steels', 'Make 320 sub-assemblies'),
        s('You tick', 'Buy becomes draft POs per supplier; make becomes planned orders.', 'Created', '3 draft POs', '1 planned production order'),
        s('Backflush', 'Report output; materials issue to the BOM automatically.', 'Production order', '500 finished · materials issued', 'Variance: price · usage · yield'),
      ],
      rules: ['Rules and arithmetic, no AI', 'Multi-level BOMs, loops refused', 'Actual costing through WIP', 'Period locks and stock checks apply', 'Optional finite capacity'],
      offs: [
        ['BOM loops back on itself', 'Refused', 'Caught when saved'],
        ['Component short at release', 'Shortage shown', 'Before production starts'],
        ['WIP left at close', 'Variance posted', 'Price · usage · yield · labour'],
        ['What-if run', 'Never saved as orders', 'Plan safely'],
      ],
      note: 'Manufacturing: add-on on Standard, Professional and Plus · included in Enterprise.',
    },
    vs: {
      human: '≈ 7 h a week', agent: '≈ 20 min of yours',
      tasks: [
        ['Explode BOMs to find material needs', 90, 'Material plan from open orders', 'auto'],
        ['Check stock vs requirement', 60, 'Shortages listed · 3 POs drafted', 'approve'],
        ['Book consumption after production', 80, 'Consumption backflushed on finish', 'auto'],
        ['Promise delivery dates', 60, 'Can-we-deliver date: Friday', 'auto'],
        ['Work out production variances', 130, 'Variances flagged above 5%', 'auto'],
      ],
      foot: [['7 h → 20 min', 'a week on planning'], ['1 tap', 'to raise POs'], ['Live', 'WIP value']],
      note: 'Illustrative week for a plant running about 25 production orders.',
    },
  },
  {
    key: 'gst', name: 'GST', em: 'GST', live: 'GST agent', image: 'm-analyst', image2: 'm-office',
    line: 'Checks tax on every entry as it posts',
    sub: 'Returns that come straight from your books.',
    chips: ['Every GSTR-1 table', '2B reconciliation', 'Health Check'],
    agent: ['Checks tax on every entry as it posts', 'Reconciles purchases with GSTR-2B', 'Runs a Health Check before filing'],
    asks: ['Is GSTR-1 ready?', "Which suppliers haven't filed?"],
    flow: ['Post', 'Check', 'Reconcile', 'Return ready'],
    features: [['Every GSTR-1 table', 'From your books, not a sheet.'], ['2B reconciliation', 'Mismatches before filing.'], ['Health Check', 'Errors caught before the portal.']],
    flagship: {
      eyebrow: 'GSTR-2B reconciliation · ITC Guard', title: 'Claim every rupee of ITC. Nothing extra.',
      steps: [
        s('Import 2B', 'Upload the 2B file from the portal or the offline tool.', 'GSTR-2B · October 2026', '412 supplier invoices imported'),
        s('Match', 'By supplier GSTIN and invoice number, within ₹2.', 'Matched', '398 matched', '6 value mismatches'),
        s('Find the gaps', 'Only in 2B (unclaimed) and only in books (credit at risk).', 'Gaps', '5 only in 2B · ₹38,200', '3 only in books · ₹22,650'),
        s('ITC Guard', 'Not in 2B, mismatch, Rule 37 unpaid 180 days, s.16(4) deadline, s.17(5) blocked.', 'Risks', 'Rule 37 · 2 bills past 180 days', 's.17(5) · motor car ₹18,400'),
        s('Propose adjustment', "The reversal journal waits for a second person's approval.", 'Adjustment', 'Reversal ₹22,650 proposed', 'Waiting for approval'),
        s('Decide', 'Reverse, reclaim, or accept the risk with a reason.', 'Resolved', 'Reversed · JV-221', 'Clears itself on the next scan'),
      ],
      rules: ['Nothing posts automatically', '₹2 tolerance', 'Credit notes matched to debit notes', 'No-GSTIN and RCM listed separately', 'Act-by dates shown'],
      offs: [
        ["Supplier hasn't filed", 'Only in books', 'Credit at risk, s.16(2)(aa)'],
        ['Supplier filed, you missed it', 'Only in 2B', 'Claim before the s.16(4) deadline'],
        ['Supplier unpaid 180 days', 'Rule 37 flag', 'Interest under s.50'],
        ['Blocked credit claimed', 's.17(5) flag', 'Reverse with one approval'],
      ],
      note: '2B reconciliation: Standard and up · ITC Guard: add-on on Standard to Plus, included in Enterprise · Portal filing and IMS: coming soon.',
    },
    vs: {
      human: '≈ 6 h a month', agent: '≈ 15 min of yours',
      tasks: [
        ['Export sales to the return format', 60, 'GSTR-1 tables built from books', 'auto'],
        ['Reconcile purchases with GSTR-2B', 120, '2B reconciled · 4 suppliers not filed', 'auto'],
        ['Remove blocked ITC', 40, 's.17(5) ITC blocked at entry', 'auto'],
        ['Tie GSTR-1, 3B and books', 70, 'Health Check clear · ready to file', 'approve'],
        ['Fix errors the portal rejects', 70, 'GSTR-1, 3B and books tied', 'auto'],
      ],
      foot: [['6 h → 15 min', 'a month on GST'], ['Clear', 'Health Check before filing'], ['Tied', '3B · 1 · books']],
      note: 'Illustrative month for a business with about 300 B2B invoices.',
    },
  },
  {
    key: 'tds', name: 'TDS, TCS and MSME', em: 'TDS,', live: 'TDS agent', image: 'm-office', image2: 'm-analyst',
    line: 'Picks the right section and rate',
    sub: 'The Income-tax Act 2025, applied entry by entry.',
    chips: ['Income-tax Act 2025', 'Right rate, always', 'Ties to ledger'],
    agent: ['Picks the right section and rate', 'Watches thresholds per party', 'Reminds you before challan due dates'],
    asks: ['TDS due this month?', 'Which parties have no PAN?'],
    flow: ['Deduct', 'Deposit', 'Return', 'Certificate'],
    features: [['Income-tax Act 2025', 's.393 with old sections alongside.'], ['Right rate, always', 'Thresholds, HUF, no-PAN.'], ['Ties to ledger', 'Register equals books.']],
    flagship: {
      eyebrow: 'TDS engine · Income-tax Act 2025', title: 'Right section. Right rate. Every time.',
      steps: [
        s('Right law', 'From 1 Apr 2026 the 2025 Act applies; earlier entries keep their 1961 references.', 'Bill · Raj Builders · ₹80,000', 'Dated 4 Nov 2026 → Income-tax Act 2025'),
        s('Right section', 'Old 194C reads as its s.393 entry; forms map 26Q → 140.', 'Section', 's.393 · contractors (old 194C)'),
        s('Threshold', 'Single, annual, monthly or excess-over, with catch-up when crossed.', 'Threshold', 'Annual ₹1,00,000 crossed', 'Catch-up on earlier bills'),
        s('Rate', 'Lower-deduction certificate first, then no-PAN (higher of rate or 20%).', 'Rate', 'Individual (from PAN) · 1%', 'TDS ₹800'),
        s('Follows the entry', 'Applied when posted; held while it waits for approval.', 'Register', 'Posted → added to the register'),
        s('Challan and return', 'Due by the 7th (March: 30 April); return file for the validation utility.', 'Challan', '₹64,300 · due 7 Dec', 'Quarterly return file prepared'),
      ],
      rules: ['Stored data never rewritten', 'Inoperative PAN treated as no PAN', 'Certificates within dates and limits', 'Multiple TANs', 'Correction returns'],
      offs: [
        ['Party has no PAN', 'Higher rate', 'Higher of section rate or 20%'],
        ['Threshold crossed mid-year', 'Catch-up deduction', 'On earlier amounts'],
        ['Entry rejected', 'TDS released', 'Kept out of the register'],
        ['Lower-deduction certificate', 'Certificate rate', 'Within its dates and amount'],
      ],
      note: 'TDS and TCS: every pack · Until the new-Act return format settles, run the latest validation utility before upload.',
    },
    vs: {
      human: '≈ 4 h a month', agent: '≈ 10 min of yours',
      tasks: [
        ['Pick the section for each bill', 50, 's.393 section picked on every bill', 'auto'],
        ['Track thresholds per party', 40, 'Thresholds tracked per party', 'auto'],
        ['Apply no-PAN and special rates', 30, 'No-PAN rate applied · s.397', 'auto'],
        ['Prepare challans', 40, 'Challan due 7 Dec · ₹64,300', 'approve'],
        ['Tie TDS register to ledger', 80, 'Register equals ledger', 'auto'],
      ],
      foot: [['4 h → 10 min', 'a month on TDS'], ['Income-tax Act 2025', 'rates built in'], ['0', 'short deductions']],
      note: 'Illustrative month for a business deducting TDS on about 60 bills.',
    },
  },
  {
    key: 'reports', name: 'Reports and analytics', em: 'Reports', live: 'Reports agent', image: 'm-analyst', image2: 'm-team',
    line: 'Mails your workbooks on schedule',
    sub: 'From statutory statements to the questions owners ask.',
    chips: ['Schedule III', 'Report builder', 'Scheduled mail'],
    agent: ['Mails your workbooks on schedule', 'Explains why a number moved', 'Raises anomaly alerts'],
    asks: ['Send P&L to my CA', 'Top 10 customers this year'],
    flow: ['Books', 'Statements', 'Insight'],
    features: [['Schedule III', 'Statements ready to sign.'], ['Report builder', 'Your own views, saved.'], ['Scheduled mail', 'Workbooks in the inbox.']],
    flagship: {
      eyebrow: 'Report builder · scheduled reports', title: 'Your report, built in words. Mailed on time.',
      steps: [
        s('Say it', "“Sales with customer PAN for last two months”, read on PairoApps' own model.", 'Report builder', 'Data: sales invoices', 'Fields: customer, PAN, amount', 'Period: last 2 months'),
        s('Shape it', 'Fields, filters, groups, subtotals and formulas.', 'Layout', 'Grouped by customer · subtotals', 'Formula: share of total'),
        s('Run it', 'Read-only, with correct subtotals, in seconds.', 'Result', '312 rows · ₹1.42 Cr'),
        s('Save and share', "Versions kept; share with roles without widening anyone's access.", 'Saved', 'Version 3 · shared with Accounts'),
        s('Pin it', 'Pin to a module menu for yourself or the company.', 'Pinned', 'Now in the Sales menu'),
        s('Schedule it', 'Daily, weekly or monthly; Excel or PDF; up to 20 recipients.', 'Schedule', 'Monthly · 1st at 8 am', 'To MD and CA · Excel'),
      ],
      rules: ['Runs as the person who scheduled it', "Lost access → paused, and you're told", 'Outside addresses only if Admin allows', 'Starter templates', '20-second safety limit'],
      offs: [
        ["Words it doesn't understand", 'Shown as chips', 'Fix them in a tap'],
        ['Scheduler loses access', 'Schedule pauses', 'Told in the app and by email'],
        ['Downgrade below the limit', 'Reports keep running', 'Editing locked'],
        ['Shared report', 'Data scope kept', 'Each person sees only their data'],
      ],
      note: 'Report builder: Professional Plus (25 reports) and Enterprise (unlimited) · Scheduled reports: every pack (Free 5 · Standard 25 · Professional 100 · Plus and Enterprise unlimited).',
    },
    vs: {
      human: '≈ 6 h a month', agent: '≈ 5 min of yours',
      tasks: [
        ['Export trial balance to Excel', 40, 'Schedule III statements live', 'auto'],
        ['Rebuild P&L and balance sheet', 90, 'Cash flow and forecast built', 'auto'],
        ['Explain why numbers moved', 80, 'Reasons for big moves written', 'auto'],
        ['Format and email the MIS', 60, 'MIS mailed to MD and CA · 1st, 8 am', 'auto'],
        ['Hunt for odd numbers', 90, '2 anomalies flagged for you', 'approve'],
      ],
      foot: [['6 h → 5 min', 'a month on MIS'], ['Auto', 'mailed on the 1st'], ['Live', 'every report']],
      note: 'Illustrative month for a monthly MIS pack of about 7 reports.',
    },
  },
  {
    key: 'budgets', name: 'Budgets and planning', em: 'Budgets', live: 'Budget agent', image: 'm-team', image2: 'm-city-bridge',
    line: 'Warns or blocks spend over budget',
    sub: 'Budgets that act before money is spent.',
    chips: ['Warn · block · route', 'Scenarios', 'Profitability'],
    agent: ['Warns or blocks spend over budget', 'Routes overruns for approval', "Forecasts the month's landing"],
    asks: ['Where are we over budget?', 'Marketing spend vs plan'],
    flow: ['Plan', 'Track', 'Alert'],
    features: [['Warn · block · route', 'You choose the control.'], ['Scenarios', 'Versions side by side.'], ['Profitability', 'By item, branch, project.']],
    flagship: {
      eyebrow: 'Budget control', title: "Stop overspend before it's posted.",
      steps: [
        s('Plan', 'Ledgers by 12 months, by department, cost centre or project; fill from last year ± %.', 'Budget · FY 2026-27', 'Marketing · ₹24 L a year', 'Filled from last year +10%'),
        s('Approve', 'Draft → submitted → approved. The preparer never approves.', 'Approval', 'Submitted by Priya', 'Approved by Ravi ✓'),
        s('Check at posting', 'Actual + committed + this entry against budget, month or year to date.', 'Check', 'Marketing: ₹2.46 L against ₹2.00 L'),
        s('Warn · block · route', 'Warn and go, block unless overridden, or route to an approver.', 'Control', 'Mode: route', 'Sent to Ravi with the reason'),
        s('Commitments', "Open POs count before they're billed.", 'Committed', '₹30,000 in open POs'),
        s('Versions', 'Revisions supersede; forecasts and scenarios for what-if.', 'Versions', 'Revision 1 approved', 'Forecast landing ₹2.76 L'),
      ],
      rules: ['Income never blocked', 'Every override registered', "Two entries can't share the last rupee", 'Budget can be locked for the year', 'Forecasts never block posting'],
      offs: [
        ['Over budget, warn mode', 'Posts with a warning', 'Logged in the register'],
        ['Over budget, block mode', 'Refused', 'Override with a reason'],
        ['Over budget, route mode', 'Waits for an approver', 'With your reason'],
        ['Two entries at once', 'One waits', 'No double spend'],
      ],
      note: 'Budgets: Professional (warn) · Plus (warn, block, commitments, forecasts) · Enterprise (route, scenarios, drivers).',
    },
    vs: {
      human: '≈ 4 h a month', agent: '≈ 10 min of yours',
      tasks: [
        ['Copy actuals into the budget sheet', 60, 'Actuals vs budget, live', 'auto'],
        ['Find heads over budget', 40, 'Warns or blocks spend over budget', 'auto'],
        ['Chase approval for overspends', 50, 'Overrun routed to you', 'approve'],
        ['Re-forecast the month', 60, 'Month landing forecast', 'auto'],
        ['Split overheads by branch', 30, 'Overheads allocated by driver', 'auto'],
      ],
      foot: [['4 h → 10 min', 'a month on budgets'], ['Before', 'money is spent'], ['1 tap', 'to approve overruns']],
      note: 'Illustrative month for about 25 budget heads across 2 branches.',
    },
  },
  {
    key: 'control', name: 'Approvals and control', em: 'Approvals', live: 'Approval agent', image: 'm-city-bridge', image2: 'm-team',
    line: 'Routes approvals by amount and role',
    sub: 'Maker-checker discipline without slowing the team.',
    chips: ['Maker-checker', 'Roles & limits', '2FA · SSO'],
    agent: ['Routes approvals by amount and role', 'Runs your automations', 'Logs every change for audit'],
    asks: ["What's waiting for my approval?", 'Who changed this voucher?'],
    flow: ['Request', 'Approve', 'Audit'],
    features: [['Maker-checker', 'By amount and type.'], ['Roles & limits', "See only what's yours."], ['2FA · SSO', 'Bank-grade sign-in.']],
    flagship: {
      eyebrow: 'Approvals · automations', title: 'The right approver, every time. Nothing missed.',
      steps: [
        s('Set the rule', 'Per voucher type: approval at or above an amount, with approver limits.', 'Payment · ₹4,80,000', 'Rule: payments of ₹1 L or more need approval'),
        s('Route', 'Steps by role, manager, named people or position; any one or all.', 'Workflow', 'Step 1 · Accounts head', 'Step 2 · Owner'),
        s('Remind', 'After your escalation time (default one day), then daily.', 'Reminder', 'Waiting 1 day · reminder sent'),
        s('Approve', 'The maker never approves. Every step is audited.', 'Approved', 'Ravi · 11:02 ✓'),
        s('Automate', 'When something happens, check conditions and act. 39 templates.', 'Automation', 'When: cash payment over ₹10,000', 'Then: hold and tell the owner'),
        s('Drafts only', 'Automations create drafts and tasks; they never post.', 'Result', 'Draft journal created', 'Task assigned to Priya'),
      ],
      rules: ['Maker is never the checker', 'Workflow versions kept', 'Vacant seat → next one up', 'New automations start switched off', 'Test mode writes nothing'],
      offs: [
        ['Approver away', 'Next seat up', 'Delegation on Enterprise'],
        ['Workflow changed mid-way', 'Old version continues', 'For documents already on the way'],
        ['Automation loops', 'Stopped', 'Chain depth 3 · 200 runs an hour'],
        ["Workflow that can't finish", 'Refused at save', 'Checked before it goes live'],
      ],
      note: 'Maker-checker and workflows: Professional (1 step) · Plus (3 steps) · Enterprise (unlimited, delegation) · Automations: Plus (10) and Enterprise (unlimited).',
    },
    vs: {
      human: '≈ 3 h a week', agent: '≈ 10 min of yours',
      tasks: [
        ['Email vouchers for approval', 50, 'Routed by amount and role', 'auto'],
        ['Chase approvers', 50, 'Reminders to approvers', 'auto'],
        ['Check who changed what', 40, 'Every change logged with reason', 'auto'],
        ['Give and revoke access', 20, '₹4.8 L payment waiting', 'approve'],
        ['Run routine tasks by hand', 20, 'Automations run on schedule', 'auto'],
      ],
      foot: [['3 h → 10 min', 'a week on approvals'], ['0', 'unapproved payments'], ['Full', 'audit trail']],
      note: 'Illustrative week for a team of about 10 users.',
    },
  },
  {
    key: 'parrot', name: 'Parrot AI and Connect', em: 'Parrot AI', live: 'Parrot AI', image: 'm-ai-erp-hero', image2: 'm-office',
    line: 'Turns words into draft entries',
    sub: 'Your AI accounting assistant and a network of PairoApps businesses.',
    chips: ['Plain words', 'Confirm card', 'Own model'],
    agent: ['Turns words into draft entries', 'Answers from your live books', 'Learns your way of booking'],
    asks: ['எவ்வளவு GST கட்டணும்?', 'Aaj ka sales kitna hua?'],
    flow: ['Ask', 'Draft', 'Confirm'],
    features: [['Plain words', 'Typed or spoken.'], ['Confirm card', 'Nothing posts without you.'], ['Own model', 'No outside AI, ever.']],
    flagship: {
      eyebrow: 'Parrot AI actions', title: 'Say it. Check the card. Tap to post.',
      steps: [
        s('Ask', 'Type or speak: “Esaki paid 5k”, “expense 500 travel from cash”.', 'Parrot AI', '“Esaki paid 5k”'),
        s('Understand', "PairoApps' own rules and model. A question is never read as an action.", 'Understood', 'Action: receipt · ₹5,000'),
        s('Find the name', 'Exact, partial, every word, sound-alike. Asks if unsure.', 'Party', 'Esaki Traders · 1 match ✓'),
        s('Dry run', 'The real service runs in dry-run; a card shows what would post.', 'Receipt card', 'Esaki Traders · ₹5,000', 'Against INV-0998'),
        s('Confirm', 'Same person, within 15 minutes. Every check runs again.', 'Confirmed', 'Rights · period lock · credit · budget ✓', 'Posted via Parrot AI'),
        s('Undo', '10 minutes to undo a Parrot AI invoice, if not shared, paid or filed.', 'Undo', 'Undo available · 9:42 left'),
      ],
      rules: ['Voice never posts — you tap', 'Access: read · draft · post', 'WhatsApp confirm needs YES + code', 'Optional posting PIN', 'No outside AI, ever'],
      offs: [
        ['Two customers called Kumar', 'Asks which', 'Never guesses'],
        ['Spoken “yes”', 'Prompts a tap', "Voice can't post"],
        ['Card older than 15 minutes', 'Expired', 'Ask again'],
        ['Period locked', 'Refused at confirm', 'Same checks as the screen'],
      ],
      note: 'Questions: every pack · Entries and voice: Standard and up · WhatsApp and approvals: Professional and up · Posting PIN: Enterprise.',
    },
    vs: {
      human: '≈ 3 h a week', agent: '≈ 5 min of yours',
      tasks: [
        ['Wait for the accountant to answer', 60, 'Answers from live books in seconds', 'auto'],
        ['Write notes for every bill', 30, 'Voice note becomes a draft invoice', 'auto'],
        ['Look up balances in reports', 40, 'Balances and dues on request', 'auto'],
        ['Explain entries to the team', 30, 'Draft confirmed in one tap', 'approve'],
        ['Re-enter the same entries', 20, 'Learns your booking habits', 'auto'],
      ],
      foot: [['3 h → 5 min', 'a week of back-and-forth'], ['Tamil · Hindi', 'and English'], ['0', 'outside AI']],
      note: 'Illustrative week for an owner and a small accounts team.',
    },
  },
]

/** "One agent · two roles" */
export const duo = {
  accountant: ['Posts the sales invoice', 'Books the supplier bill', 'Matches the bank line', 'Closes the month'],
  auditor: ['GST rate and place of supply', 'Duplicate and blocked ITC', 'No double payment', 'Health Check · 70 checks'],
  foot: ['Checked as you post', 'Full audit any time', 'Audit trail always on', 'No year-end surprises'],
}

/** "One working day. Zero chasing." */
export const workingDay = [
  '08:02 · Banking agent matched 58 bank lines.',
  '08:40 · Bills agent read 6 bills from photos.',
  '09:00 · Sales agent raised and sent 14 invoices.',
  '10:15 · Approval agent has 1 question for you.',
  '18:00 · Close agent: books ready to close, Day 0.',
]

/** Migration in 3 days, live in 2 weeks. */
export const implementation = [
  { when: 'Day 1', what: 'Masters', phase: 'Migration' },
  { when: 'Day 2', what: 'Balances & open bills', phase: 'Migration' },
  { when: 'Day 3', what: 'Tied to old books', phase: 'Migration' },
  { when: 'Week 1–2', what: 'Team & approvals', phase: 'Go-live' },
  { when: 'Week 2', what: 'Live', phase: 'Go-live' },
]

/** Parrot AI scenarios: [title, what it does, you ask, Parrot AI replies, then] */
export const parrotScenarios: [string, string, string, string, string][] = [
  ['Answer from your books', 'Live figures, not guesses.', "What's my bank balance?", 'HDFC ₹62.1 L, ICICI ₹8.4 L — total ₹70.5 L, reconciled this morning.', 'And cash in hand? ₹48,250 — Madurai ₹31,000, Trichy ₹17,250.'],
  ['Make entries', 'Sales, purchases, receipts, journals.', 'Received ₹50,000 from Kumar', 'Draft receipt: Kumar Constructions, into HDFC Bank, against INV-1031 (part).', 'Posted · RCT-0412. INV-1031 now has ₹70,000 due ✓'],
  ['Take voice notes', 'Hold, speak, done.', '🎤 Pay rent for November', 'Draft payment: S. Kannan rent ₹50,000, TDS s.393 10% −₹5,000, net ₹45,000.', "Paid and posted · PV-1194. TDS added to this month's challan ✓"],
  ['Read documents', 'Bills, receipts, statements.', '📎 bill_0412.jpg', 'Sri Balaji Steels, B-882, ₹1,18,000 incl. 18% GST. Matches PO-114 and GRN-208.', 'Draft purchase bill ready to confirm.'],
  ['Chase collections', 'Email follow-ups with UPI pay links.', 'Who should we remind today?', '6 customers, ₹4.6 L overdue. Reminders are ready — friendly for 4, firm for 2.', 'Approved · emails leave at 10 am with UPI pay links and statements ✓'],
  ['Explain reports', 'Why a number moved, in plain words.', 'Why did margin drop?', 'Gross margin fell from 24% to 21%: cement cost up 6%, and 3 invoices carried discounts above 15%.', 'INV-1040, 1044 and 1047 — ₹1.9 L in all. Opened the list for you.'],
  ['Check compliance', 'GST and TDS before you file.', 'Is my 3B ready?', 'Almost. 1 problem: ITC ₹18,400 on motor car repairs is blocked under s.17(5). Reverse it?', 'Reversed · JV-221. GSTR-3B, GSTR-1 and books now agree ✓'],
  ['Speak your language', 'English, Tamil, Hindi, Tanglish.', 'இந்த மாசம் sales எவ்வளவு?', 'இந்த மாசம் sales ₹48.6 லட்சம் — போன மாசத்தை விட 12% அதிகம்.', 'Aaj ka collection kitna hua? Aaj ₹2.3 lakh aaye — 5 customers se.'],
  ['Learn your way', 'Corrections become rules.', 'Always book diesel to Vehicle expenses', 'Got it. Diesel bills go to Vehicle expenses from now on.', 'Booked ₹6,480 to Vehicle expenses — as you taught me ✓'],
]

export const parrotStories = parrotScenarios.map(([title, what, ask, reply, then]) => ({
  title,
  body: what,
  rows: [['You ask', `“${ask}”`], ['Parrot AI', reply], ['Then', then]] as [string, string][],
}))

/** Health Check: live run (example) */
export const healthChecks: { name: string; status: 'Clear' | 'Warning' | 'Problem'; result: string }[] = [
  { name: 'Trial balance balances', status: 'Clear', result: 'Dr = Cr' },
  { name: 'Numbering gaps', status: 'Clear', result: 'None' },
  { name: 'Duplicate purchase bills', status: 'Warning', result: '2 likely' },
  { name: 'GSTR-3B, GSTR-1 and books agree', status: 'Clear', result: 'Tied' },
  { name: 'ITC on blocked heads · s.17(5)', status: 'Problem', result: '₹18,400 · motor car repairs claimed as ITC; reverse it before GSTR-3B' },
  { name: 'TDS register equals ledger', status: 'Clear', result: 'Tied' },
  { name: 'Stock value equals inventory ledgers', status: 'Clear', result: 'Tied' },
  { name: 'Cash over limit · s.40A(3)', status: 'Warning', result: '1 entry' },
  { name: 'Entries in locked periods', status: 'Clear', result: 'None' },
]

/** Health Check areas: [area, checks, what it covers] */
export const healthAreas: [string, number, string][] = [
  ['Books', 10, 'Trial balance, gaps, locked periods'],
  ['Duplicates', 7, 'Bills, invoices, parties, items'],
  ['GST', 8, '3B vs 1 vs books, 2B, s.17(5)'],
  ['TDS', 7, 'Sections, PAN, register vs ledger'],
  ['Inventory', 7, 'Negative, stale, expiring stock'],
  ['Manufacturing', 12, 'BOM loops, WIP, variances'],
  ['Sales & purchase', 5, 'Open items, settlements'],
  ['Fixed assets', 3, 'Register vs ledger, depreciation'],
  ['Time & billing', 6, 'Unbilled hours, rates'],
  ['Banking', 1, 'Unreconciled balances'],
  ['Platform', 4, 'Access, approvals, setup'],
]

/** The law, built in. */
export const laws = [
  { name: 'GST', act: 'CGST · IGST Act', flow: ['Post', 'Tax checked', '2B matched', 'GSTR-1 · 3B', 'Return ready'], chips: ['Place of supply', 'ITC · s.17(5)', 'Branch transfers'], body: 'Every GSTR-1 table from your books, 2B matched before filing, and GSTR-1, GSTR-3B and the books kept tied.' },
  { name: 'TDS · TCS', act: 'Income-tax Act, 2025', flow: ['Bill', 's.393 section', 'Rate + threshold', 'Challan', 'Return'], chips: ['Old sections alongside', 'No-PAN · s.397', 'Cash limits · s.40A(3)'], body: 'The right section and rate on every bill, with the register tied to the ledger and Form 140 ready.' },
  { name: 'Books & audit', act: 'Companies Act · CARO · AS', flow: ['Entry', 'Audit trail', 'Approve', 'Lock', 'Schedule III'], chips: ["Edit log can't be switched off", 'AS 2 · cost or NRV', 'CARO 3(ii)'], body: 'An audit trail that is always on, as Rule 3(1) of the Companies (Accounts) Rules requires, and statements in Schedule III.' },
  { name: 'MSME', act: 'MSMED Act · s.43B(h)', flow: ['Bill', '45-day clock', 'Alert', 'Pay'], chips: ['Dues by supplier', 'Disallowance', 'Bank stock statement'], body: 'A 45-day clock on every MSME bill, an alert before day 45, and the disallowance computed for tax audit.' },
]

export const lawStories = laws.map((l) => ({
  title: l.name,
  body: l.body,
  rows: [['Law', l.act], ['Flow', l.flow.join(' → ')], ['Built in', l.chips.join(' · ')]] as [string, string][],
}))

/** November 2026 compliance calendar. */
export const dueDates = [
  { name: 'TDS challan', due: '7 Nov' },
  { name: 'GSTR-1', due: '11 Nov' },
  { name: 'GSTR-3B', due: '20 Nov' },
  { name: 'MSME dues', due: 'Within 45 days' },
]

/** Also inside PairoApps. */
export const alsoInside = [
  { title: 'Internal chat', body: 'Message a colleague, a team or the whole company — right beside the books.', rows: [['Agent', 'Team chat'], ['Rooms', 'Direct, group and company-wide'], ['Files', 'Private to the conversation'], ['Messages', 'Arrive live'], ['Pack', 'Every pack']] as [string, string][] },
  { title: 'Inter-company & eliminations', body: 'Every inter-company entry is tracked, paired and eliminated in the group figures.', rows: [['Agent', 'Consolidation agent'], ['Pairing', 'Equal-and-opposite, exceptions with reasons'], ['Eliminations', 'As AS 21 / Ind AS 110'], ['Adjustments', 'Only in group figures, audited'], ['Pack', 'Enterprise']] as [string, string][] },
  { title: 'Reports in plain words', body: 'Type what you need. PairoApps builds the report — fields, filters and totals.', rows: [['Agent', 'Reports agent'], ['Example', '“Sales with customer PAN for last two months”'], ['Reads', "On PairoApps' own model; some Tanglish and Hindi"], ['Then', 'Save, share by role, schedule by email'], ['Pack', 'Professional Plus · Enterprise']] as [string, string][] },
]

/** Packs and pricing (per company, yearly, before GST). */
export const packs = [
  { name: 'Free', tag: 'For one person starting out', price: 'Free forever', builds: '', feats: ['1 user · 1 company', '1,000 invoices a year', 'GST returns and TDS', 'UPI pay links', 'Built-in Health Check'] },
  { name: 'Standard', tag: 'For small teams', price: '₹6,000 per company / year + GST', builds: 'Free', feats: ['3 users · 3 branches', 'Unlimited invoices', 'Parrot AI entries and voice', 'Collection agent', 'Warehouses · GSTR-2B reconciliation'] },
  { name: 'Professional', tag: 'For growing SMEs', price: '₹12,000 per company / year + GST', builds: 'Standard', feats: ['10 users · 3 companies', 'Budgets', 'Approval workflows', 'Collection autopilot', 'Batches and price lists'] },
  { name: 'Professional Plus', tag: 'Customise and control', price: '₹48,000 per company / year + GST', builds: 'Professional', featured: true, feats: ['25 users · 3 companies', 'Custom fields and print designer', 'Report builder · 25 reports', '10 automations · 10 custom checks', 'Own roles and API'] },
  { name: 'Enterprise', tag: 'For groups', price: '₹1,80,000 per company / year + GST', builds: 'Plus', feats: ['50 users · group consolidation', 'Manufacturing included', 'Governance and advanced planning', 'SSO, success manager, SLA', 'Unlimited custom checks'] },
  { name: 'Professional One', tag: 'Professional Plus with the full business suite.', price: '₹90,000 per company / year', builds: '', soon: true, feats: [] },
  { name: 'Enterprise One', tag: 'Enterprise with every suite module.', price: '₹2,76,000 per company / year', builds: '', soon: true, feats: [] },
]

export const packTrust = ['Migration in 3 days.', 'Live in 2 weeks.', 'Users, branches and warehouses shared across your companies.', 'No outside AI.']

export const packFaq = [
  { q: 'Is GST included?', a: 'Prices are before GST. Monthly billing is a tenth of the yearly price, each month.' },
  { q: 'What is shared across companies?', a: 'Users, branches and warehouses are pooled across your companies.' },
  { q: 'Can I move up a pack?', a: 'Yes. Your books stay as they are; new features switch on.' },
  { q: 'Is manufacturing included?', a: 'Manufacturing is an add-on on Standard, Professional and Professional Plus, and included in Enterprise.' },
  { q: 'Which packs get custom health checks?', a: 'Built-in checks come in every pack. Professional Plus adds up to 10 custom checks; Enterprise has unlimited.' },
]
