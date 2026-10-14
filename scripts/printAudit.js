import fs from 'fs'

const data = JSON.parse(fs.readFileSync('audit-summary.json', 'utf8'))
console.log('Order | Slug | Total Words (EN/BN) | Foundation (Secs/Words) | Academic (Secs/Words) | Advanced (Secs/Words) | Terms | Worked | Checkpoints | Refs')
console.log('---|---|---|---|---|---|---|---|---|---')
data.forEach(ch => {
  const f = ch.levels.foundation
  const ac = ch.levels.academic
  const ad = ch.levels.advanced
  console.log(`${ch.order} | ${ch.slug} | ${ch.totalWordCountEn} / ${ch.totalWordCountBn} | ${f.sectionCount}s / ${f.wordCountEn}w | ${ac.sectionCount}s / ${ac.wordCountEn}w | ${ad.sectionCount}s / ${ad.wordCountEn}w | ${ch.termsCount} | ${ch.workedExamplesCount} | ${ch.checkpointsCount} | ${ch.referencesCount}`)
})
