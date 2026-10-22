import { 
  ChefHat, 
  Wifi, 
  Tv, 
  Smartphone, 
  Shirt, 
  HeadphonesIcon, 
  Moon, 
  MapPin 
} from "lucide-react"

const amenities = [
  { icon: ChefHat, label: "Küche" },
  { icon: Wifi, label: "WLAN" },
  { icon: Tv, label: "TV" },
  { icon: Smartphone, label: "Self-Check-in" },
  { icon: Shirt, label: "Frische Wäsche" },
  { icon: HeadphonesIcon, label: "Persönlicher Support" },
  { icon: Moon, label: "Ruhige Nächte" },
  { icon: MapPin, label: "Zentrale Lage" },
]

export function Amenities() {
  return (
    <section className="bg-[#F8FBFD] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#245DCE]">
            Ausstattung
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[#171717] sm:text-4xl">
            Alles da, was dein Apartment in Düsseldorf braucht.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-[#555555]">
            Die BHH Living Apartments sind auf unkomplizierte Aufenthalte ausgelegt: Küche, WLAN, TV, Self-Check-in und persönliche Unterstützung, wenn du sie brauchst.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {amenities.map((amenity) => (
            <div
              key={amenity.label}
              className="group flex flex-col items-center rounded-[24px] p-6 text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "linear-gradient(165deg, #FFFFFF 0%, #F8FBFD 100%)",
                border: "1px solid rgba(36, 93, 206, 0.08)",
                boxShadow: `
                  0 12px 30px -12px rgba(36, 93, 206, 0.1),
                  0 4px 12px -4px rgba(0, 0, 0, 0.04),
                  inset 0 1px 0 rgba(255,255,255,1)
                `,
              }}
            >
              <div 
                className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                style={{
                  background: "linear-gradient(145deg, rgba(36,93,206,0.1), rgba(19,199,232,0.1))",
                  boxShadow: "0 6px 16px rgba(36, 93, 206, 0.12)",
                }}
              >
                <amenity.icon className="h-6 w-6 text-[#245DCE]" />
              </div>
              <span className="font-semibold text-[#171717]">{amenity.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
