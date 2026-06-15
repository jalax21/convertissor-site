type FAQItem = {
  questionFr: string
  questionEn: string
  answerFr: string
  answerEn: string
}

type Props = {
  locale: string
  titleFr: string
  titleEn: string
  descriptionFr: string
  descriptionEn: string
  popularConversions: string[]
  formulas: string[]
  faq: FAQItem[]
}

export default function ConverterSeoSection({
  locale,
  titleFr,
  titleEn,
  descriptionFr,
  descriptionEn,
  popularConversions,
  formulas,
  faq,
}: Props) {
  return (
    <section className="mt-20 space-y-8">

      {/* Explications */}

      <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm">

        <h2 className="text-2xl font-bold mb-4">
          📚 {locale === "fr" ? titleFr : titleEn}
        </h2>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {locale === "fr"
            ? descriptionFr
            : descriptionEn}
        </p>

      </div>

      {/* Formules */}

      <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm">

        <h2 className="text-2xl font-bold mb-4">
          📐 {locale === "fr"
            ? "Formules de conversion"
            : "Conversion formulas"}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

  {formulas.map((formula) => (
    <div
      key={formula}
      className="p-4 rounded-xl bg-gray-100 dark:bg-slate-900 text-center font-medium"
    >
      {formula}
    </div>
  ))}

</div>

      </div>
      {/* Conversions populaires */}

<div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm">

  <h2 className="text-2xl font-bold mb-4">
    🔥 {locale === "fr"
      ? "Conversions populaires"
      : "Popular conversions"}
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

    {popularConversions.map((conversion) => (
      <div
        key={conversion}
        className="p-4 rounded-xl bg-gray-100 dark:bg-slate-900 text-center font-medium"
      >
        {conversion}
      </div>
    ))}

  </div>

</div>

      {/* FAQ */}

      <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm">

  <h2 className="text-2xl font-bold mb-6">
    ❓ FAQ
  </h2>

  <div className="space-y-6">

    {faq.map((item, index) => (
      <div key={index}>
        <h3 className="font-semibold text-lg mb-2">
          {locale === "fr"
            ? item.questionFr
            : item.questionEn}
        </h3>

        <p className="text-gray-600 dark:text-gray-300">
          {locale === "fr"
            ? item.answerFr
            : item.answerEn}
        </p>
      </div>
    ))}

  </div>

</div>

      

    </section>
  )
}