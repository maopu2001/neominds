import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Lorem, ipsum.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, distinctio.",
    icon: "🧪",
  },
  {
    title: "Lorem, ipsum.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, distinctio.",
    icon: "🔭",
  },
  {
    title: "Lorem, ipsum.",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, distinctio.",
    icon: "🧠",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary to-secondary text-foreground py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">NeoMinds</h1>
            <p className="text-xl font-light max-w-2xl mx-auto">[Moto]</p>
          </div>

          <div className="flex justify-center gap-4">
            <Button className="bg-primary text-foreground px-6 py-3 rounded-lg transition hover:bg-background/60 shadow-lg">
              Join NeoMinds
            </Button>
            <Button
              variant="outline"
              className="border border-foreground text-foreground px-6 py-3 rounded-lg transition"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We Explore
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-muted p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <span className="text-foreground text-xl font-mono">
                    {feature.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-text-body">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to expand your mind?
          </h2>
          <p className="text-lg text-text-body mb-8 max-w-2xl mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
            eos vel sint obcaecati culpa adipisci minima similique non dolorem
            veniam ea facere dignissimos voluptatum nam odit quaerat nulla,
            dolor et.
          </p>
          <Button className="bg-primary text-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary-dark transition">
            Become a Member
          </Button>
        </div>
      </section>
    </main>
  );
}
