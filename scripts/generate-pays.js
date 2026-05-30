const fs = require("fs")

async function generatePays() {

  const response = await fetch(
  "https://restcountries.com/v3.1/all?fields=name,flag,capital,continents,population,area,languages,currencies,cca3"
)

  console.log("Status:", response.status)

  const data = await response.json()

  console.log("Array ?", Array.isArray(data))
  console.log(data)

  if (!Array.isArray(data)) {
    throw new Error("L'API n'a pas renvoyé un tableau")
  }

  const countries = data

  console.log("Pays retenus :", countries.length)

  countries.sort((a, b) =>
    a.name.common.localeCompare(b.name.common, "fr")
  )
  let output = `export const paysFiches = [\n\n`

  for (const country of countries) {

    const nom = country.name.common

    let slug = nom
  .toLowerCase()
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "")

   slug = `${slug}-${country.cca3.toLowerCase()}`

    const drapeau = country.flag || "🌍"

    const capitale =
      country.capital?.[0] || "Inconnue"

    const continent =
      country.continents?.[0] || "Inconnu"

    const population =
      country.population
        ? country.population.toLocaleString("fr-FR")
        : "Inconnue"

    const superficie =
      country.area
        ? country.area.toLocaleString("fr-FR")
        : "Inconnue"

    const langue =
      country.languages
        ? Object.values(country.languages).join(", ")
        : "Inconnue"

    const monnaie =
      country.currencies
        ? Object.values(country.currencies)
            .map(c => `${c.name} (${c.symbol || ""})`)
            .join(", ")
        : "Inconnue"

    output += `  {
    slug: "${slug}",
    title: "${drapeau}  ${nom}",
    image: "/images/revisions/pays/default.webp",

    content: {
      definition:
        "${nom} est un pays situé en ${continent}. Sa capitale est ${capitale}.",

      formule:
        "• Capitale : ${capitale}<br />• Population : ${population} habitants<br />• Superficie : ${superficie} km²<br />• Langue(s) : ${langue}<br />• Monnaie : ${monnaie}",

      exemple:
        "${nom} est un pays du continent ${continent}.",
    },
  },

`
  }

  output += "]\n"

  fs.mkdirSync("./data/revisions", {
    recursive: true,
  })

  fs.writeFileSync(
    "./data/revisions/pays.ts",
    output,
    "utf8"
  )

  console.log("✅ pays.ts généré avec succès")
}

generatePays().catch(console.error)
