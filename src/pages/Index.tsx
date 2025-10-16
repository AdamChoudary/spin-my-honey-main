import { SpinWheel } from "@/components/SpinWheel";
import { Card } from "@/components/ui/card";
import {
  Sparkles,
  Users,
  Shuffle,
  Zap,
  GraduationCap,
  Briefcase,
  PartyPopper,
  Home,
} from "lucide-react";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>
          Hi Honey - Free Spin Wheel | Random Name Picker & Decision Maker
        </title>
        <meta
          name="description"
          content="Make decisions fun with Hi Honey's free spin wheel. Perfect for classrooms, giveaways, team decisions, and more. Customize your wheel and spin now!"
        />
        <meta
          name="keywords"
          content="spin wheel, random picker, name picker, decision maker, wheel of names, random selector, spin wheel yes or no, customizable spin wheel"
        />
        <link rel="canonical" href="https://hihoney.site/" />

        <meta property="og:title" content="Hi Honey - Free Spin Wheel Tool" />
        <meta
          property="og:description"
          content="Make random decisions fun with our interactive spin wheel. Perfect for teachers, teams, and anyone who needs to pick randomly."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hihoney.site/" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Hi Honey Spin Wheel",
            description:
              "Free online spin wheel tool for random selection and decision making. Making Decisions Fun, One Spin at a Time.",
            url: "https://hihoney.site",
            applicationCategory: "UtilityApplication",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="w-full py-8 bg-gradient-to-b from-background to-muted/20 relative">
        <div className="max-w-7xl mx-auto text-center mb-10 px-4 lg:px-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
              Spin Wh
            </span>
            <span className="bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 bg-clip-text text-transparent">
              eel - Make
            </span>
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              {" "}
              Decisions
            </span>
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              {" "}
              Fun!
            </span>
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            The ultimate random picker tool for fair decisions
          </p>
        </div>

        <SpinWheel />
      </section>

      <section className="w-full px-4 lg:px-6 py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              Why Use Our Spin Wheel?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover the features that make our spin wheel the perfect choice
              for any decision-making scenario
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-border/50 bg-white/80 dark:bg-background/80 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Completely Free</h3>
              <p className="text-muted-foreground leading-relaxed">
                No sign-up required. Use our spin wheel tool absolutely free,
                anytime, anywhere.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-border/50 bg-white/80 dark:bg-background/80 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Perfect for Groups</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ideal for classrooms, team meetings, parties, and family game
                nights.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-border/50 bg-white/80 dark:bg-background/80 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shuffle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Truly Random</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our algorithm ensures fair and unbiased random selection every
                time.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-border/50 bg-white/80 dark:bg-background/80 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Easy to Use</h3>
              <p className="text-muted-foreground leading-relaxed">
                Add your options, click spin, and get instant results with fun
                animations.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full px-4 lg:px-6 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border-2 border-primary/20 shadow-2xl backdrop-blur-sm">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
                How to Use the Spin Wheel
              </h2>
              <p className="text-lg text-muted-foreground">
                Get started in just a few simple steps
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="font-bold text-primary-foreground">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Add Your Entries</h3>
                    <p className="text-muted-foreground">
                      Add your entries in the list on the right. You can add as
                      many options as you want.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="font-bold text-primary-foreground">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Customize Colors</h3>
                    <p className="text-muted-foreground">
                      Each entry gets a unique color automatically. Edit or
                      remove entries as needed.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="font-bold text-primary-foreground">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Spin the Wheel</h3>
                    <p className="text-muted-foreground">
                      Click the "Spin the Wheel!" button and watch the magic
                      happen.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="font-bold text-primary-foreground">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Celebrate the Winner</h3>
                    <p className="text-muted-foreground">
                      The wheel will spin and randomly select a winner with
                      confetti celebration!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="w-full px-4 lg:px-6 py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              Popular Uses for Our Spin Wheel
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover how our spin wheel can transform decision-making across
              different settings
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-border/50 bg-white/80 dark:bg-background/80 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold">Education</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Random student selection for questions
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Picking presentation orders
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Selecting group leaders
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  Choosing classroom activities
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-border/50 bg-white/80 dark:bg-background/80 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold">Business</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Team meeting ice breakers
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Selecting meeting speakers
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Choosing lunch locations
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Giveaway winner selection
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-border/50 bg-white/80 dark:bg-background/80 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <PartyPopper className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold">Entertainment</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Party game decisions
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Movie night selections
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Restaurant choices
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Truth or dare spinner
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-border/50 bg-white/80 dark:bg-background/80 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Home className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold">Family</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Chore assignment
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Deciding family activities
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Picking who goes first in games
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  Settling friendly disputes
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
