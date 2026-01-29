import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Layers, 
  Paintbrush, 
  Bath, 
  Car, 
  Warehouse, 
  Building2, 
  Building, 
  Square, 
  Thermometer, 
  Footprints,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const services = [
  { 
    id: "aanbouw",
    icon: Home, 
    title: "Aanbouw of opbouw plaatsen", 
    description: "Meer ruimte nodig, zonder te verhuizen? Met een aanbouw of opbouw creëren we extra leefruimte die naadloos aansluit op je woning. We starten met inventarisatie van wensen, constructie en vergunningen waar nodig. Daarna maken we een heldere planning en voeren we de bouw vakkundig uit, inclusief isolatie en nette afwerking. Denk aan een grotere keuken, extra woonkamer of een extra verdieping. Je krijgt één aanspreekpunt en duidelijke afspraken over oplevering. Zo weet je vooraf precies wat je krijgt en wanneer het klaar is.",
    features: ["Extra leefruimte", "Naadloze aansluiting", "Inclusief isolatie", "Vergunningsbegeleiding"]
  },
  { 
    id: "dakkapel",
    icon: Layers, 
    title: "Dakkapel plaatsen of vervangen", 
    description: "Een dakkapel zorgt voor meer licht, meer stahoogte en extra wooncomfort. Wij plaatsen nieuwe dakkapellen of vervangen verouderde exemplaren inclusief controle op constructie, dak aansluiting en waterdichting. We letten extra op isolatie en luchtdichtheid om warmteverlies en vochtproblemen te voorkomen. Je krijgt een oplossing die past bij het dak, de stijl van je woning en je budget. We werken efficiënt, netjes en leveren strak af zodat je direct kunt genieten van de extra ruimte.",
    features: ["Meer licht", "Extra stahoogte", "Goede isolatie", "Waterdichte afwerking"]
  },
  { 
    id: "renovatie",
    icon: Paintbrush, 
    title: "Renovatie huis", 
    description: "Bij een huisrenovatie draait het om kwaliteit, planning en slimme keuzes. We renoveren ruimtes of het hele huis, van sloop en constructieve aanpassingen tot afwerking. Denk aan wanden, plafonds, indeling, vloeren, isolatie en het vernieuwen van onderdelen die aan vervanging toe zijn. We stemmen alles af op je wensen en zorgen dat je een realistische planning krijgt. Je ontvangt een transparante offerte en we houden je tussentijds goed op de hoogte. Zo blijft het project overzichtelijk en controleerbaar.",
    features: ["Complete renovatie", "Slimme keuzes", "Transparante offerte", "Tussentijdse updates"]
  },
  { 
    id: "badkamer",
    icon: Bath, 
    title: "Badkamer plaatsen of renoveren", 
    description: "Een badkamer moet praktisch zijn én jarenlang mooi blijven. Wij verzorgen complete badkamers of renovaties: van leidingwerk en waterdichting tot tegelwerk en afmontage. We denken mee over indeling, ventilatie en onderhoudsgemak. Belangrijk is een strakke ondergrond en correcte afdichting, zodat je geen gedoe krijgt met lekkage of schimmel. We werken met een duidelijke planning en leveren netjes op. Of je nu kiest voor modern, hotel chique of tijdloos: we zorgen voor een badkamer die klopt tot in de details.",
    features: ["Complete installatie", "Waterdichte afwerking", "Goede ventilatie", "Stijl naar wens"]
  },
  { 
    id: "carport",
    icon: Car, 
    title: "Carport plaatsen", 
    description: "Een carport beschermt je auto tegen weer en wind en is vaak sneller te realiseren dan een garage. We plaatsen carports die passen bij je woning en beschikbare ruimte, met aandacht voor fundering, constructie en afwatering. We bespreken materiaalkeuze en uitstraling, en zorgen voor een stevige, duurzame oplossing. Netjes afgewerkt en praktisch in gebruik. Je krijgt heldere afspraken over werkzaamheden en oplevering, zodat je precies weet waar je aan toe bent.",
    features: ["Bescherming auto", "Snelle realisatie", "Duurzame constructie", "Passend bij woning"]
  },
  { 
    id: "garage",
    icon: Warehouse, 
    title: "Garage (ver)bouwen", 
    description: "Een garage kan veel meer zijn dan een opslagruimte. We bouwen nieuwe garages, vergroten bestaande garages of maken er een functionele ruimte van, zoals een werkplaats, bijkeuken of hobbyruimte. We kijken naar constructie, isolatie en eventuele aansluitingen voor elektra of water. Ook bij doorbraken of nieuwe deuren en kozijnen zorgen we dat alles stevig en netjes wordt uitgevoerd. Met duidelijke planning en transparante kosten houd je controle over het project.",
    features: ["Nieuwbouw of verbouw", "Multifunctioneel", "Isolatie mogelijk", "Elektra en water"]
  },
  { 
    id: "kelder",
    icon: Building2, 
    title: "Kelder bouwen of renoveren", 
    description: "Een kelder is ideaal voor extra opslag, een wasruimte of zelfs een woonruimte, mits het goed gebouwd en waterdicht is. We bouwen kelders of renoveren bestaande kelders met focus op constructieve veiligheid, ventilatie en vochtwering. We beoordelen de situatie, adviseren over mogelijkheden en werken met oplossingen die passen bij de bodem en de woning. Bij renovatie pakken we problemen zoals vocht, schimmel en slechte afwerking gericht aan. Resultaat: een kelder die droog, bruikbaar en netjes is.",
    features: ["Waterdicht", "Goede ventilatie", "Constructief veilig", "Vochtproblemen oplossen"]
  },
  { 
    id: "nieuwbouw",
    icon: Building, 
    title: "Nieuwbouw volledig huis", 
    description: "Nieuwbouw vraagt om structuur, vakmanschap en heldere coördinatie. SkillBridge Bouwservices begeleidt het proces van voorbereiding tot oplevering, inclusief ruwbouw en afbouw. We werken volgens planning, communiceren duidelijk en zorgen dat keuzes op tijd worden gemaakt. Zo voorkom je vertragingen en extra kosten. We denken mee over isolatie, indeling en afwerking en leveren een huis dat klopt in uitvoering en detail. Je hebt één aanspreekpunt en weet steeds waar je staat in het proces.",
    features: ["Compleet traject", "Ruwbouw en afbouw", "Één aanspreekpunt", "Strakke planning"]
  },
  { 
    id: "koof",
    icon: Square, 
    title: "Ombouw/koof plaatsen of vervangen", 
    description: "Een koof of ombouw zorgt voor een strakke afwerking rondom leidingen, ventilatiekanalen of constructiedelen. Wij plaatsen of vervangen koven met oog voor symmetrie, nette hoeken en een afwerking die naadloos aansluit op de ruimte. Ideaal bij renovaties, badkamers, keukens of om technische onderdelen netjes weg te werken. We zorgen dat het stevig is, goed toegankelijk blijft waar nodig, en klaar is om te schilderen of af te werken. Klein onderdeel, groot verschil in uitstraling.",
    features: ["Strakke afwerking", "Symmetrische uitvoering", "Toegankelijk waar nodig", "Schilderklaar"]
  },
  { 
    id: "isolatie",
    icon: Thermometer, 
    title: "Warmte isolatie", 
    description: "Goede isolatie maakt je woning comfortabeler en verlaagt het energieverbruik. We verzorgen warmte isolatie waar het telt, bijvoorbeeld bij aanbouw, renovatie, dak en wanden. We letten op juiste materiaalkeuze, aansluiting en luchtdichtheid om warmteverlies en vochtproblemen te voorkomen. Je krijgt een oplossing die past bij jouw situatie en budget, en we leggen duidelijk uit wat het effect is. Met nette uitvoering en goede details haal je het maximale uit isolatie.",
    features: ["Energiebesparing", "Meer comfort", "Juiste materialen", "Vochtpreventie"]
  },
  { 
    id: "vloeren",
    icon: Footprints, 
    title: "Vloeren leggen en trappen renovatie", 
    description: "De vloer en trap bepalen voor een groot deel de uitstraling van je woning. We leggen vloeren strak en vlak, met aandacht voor ondergrond, afwerking en duurzaamheid. Daarnaast renoveren we trappen zodat ze weer als nieuw ogen, met een nette afwerking die past bij je interieur. We bespreken de gewenste look en slijtvastheid en werken volgens een duidelijke planning. Resultaat: een frisse, verzorgde uitstraling en een afwerking waar je dagelijks plezier van hebt.",
    features: ["Strakke vloeren", "Trap renovatie", "Duurzaam materiaal", "Passend bij interieur"]
  },
];

const Diensten = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Onze bouwdiensten
            </h1>
            <p className="text-xl text-primary-foreground/90">
              SkillBridge Bouwservices verzorgt verbouwingen en bouwprojecten van A tot Z. 
              Van constructie tot afwerking. Kies een dienst of vraag direct een vrijblijvende offerte aan.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-mt-24 flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                {/* Icon/Visual */}
                <div className="lg:w-1/3 flex justify-center">
                  <div className="w-48 h-48 bg-accent/10 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-24 h-24 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-2/3">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact">
                    <Button variant="orange">
                      Offerte aanvragen
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Klaar om te starten?
          </h2>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Vraag vrijblijvend een offerte aan en ontvang binnen 24 uur reactie.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Offerte aanvragen
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Diensten;
