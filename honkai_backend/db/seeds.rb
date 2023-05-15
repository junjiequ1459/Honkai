# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Create a test character

# Create a test character
seele = Character.create(
  name: "Seele",
  character_class: "The Hunt",
  level: 50,
  stats: {
    attack: 300,
    hp: 5000,
    defense: 100,
    speed: 150,
    crit_rate: 0.5,
    crit_dmg: 2.0,
    break_effect: 0.2,
    outgoing_healing_boost: 0.2,
    max_energy: 150,
    energy_regen_rate: 0.1,
    effect_hit_rate: 0.5,
    effect_res: 0.5,
  },
  skills: ["Thwack", "Sheathed Blade", "Butterfly Flurry", "Resurgence", "Phantom Illusion"],
  traces: [
    {
      name: "ATK Boost",
      level: 0,
      effect: "ATK increases by 4.0%",
    },
    {
      name: "Nightshade",
      level: 0,
      effect: "When current HP percentage is 50% or lower, reduces the chance of being attacked by enemies.",
    },
    {
      name: "CRIT DMG Boost",
      level: 0,
      effect: "CRIT DMG increases by 5.3%",
    },
    {
      name: "DEF Boost",
      level: 0,
      effect: "DEF increases by 5.0%",
    },
    {
      name: "Lacerate",
      level: 0,
      effect: "While Seele is in the buffed state, her Quantum RES PEN increases by 20%.",
    },
    {
      name: "Rippling Waves",
      level: 0,
      effect: "After using a Basic ATK, Seele's next action will be Advanced Forward by 20%.",
    },
    {
      name: "CRIT DMG Boost",
      level: 0,
      effect: "CRIT DMG increases by 8.0%",
    },
    {
      name: "ATK Boost",
      level: 0,
      effect: "ATK increases by 6.0%",
    },
  ],
  eidolons: {
    "Extirpating Slash": 1,
    "Dancing Butterfly": 2,
    "Dazzling Tumult": 3,
    "Flitting Phantasm": 4,
    "Piercing Shards": 5,
    "Shattering Shambles": 6,
  },
)

korone = Character.create(
  name: "Korone",
  character_class: "Unknown",
  level: 1,
  stats: {
    attack: rand(100..500),
    hp: rand(1000..5000),
    defense: rand(50..200),
    speed: rand(100..200),
    crit_rate: rand(0.1..0.9).round(2),
    crit_dmg: rand(1.5..2.5).round(2),
    break_effect: rand(0.1..0.5).round(2),
    outgoing_healing_boost: rand(0.1..0.5).round(2),
    max_energy: rand(100..200),
    energy_regen_rate: rand(0.05..0.15).round(2),
    effect_hit_rate: rand(0.1..0.9).round(2),
    effect_res: rand(0.1..0.9).round(2),
  },
  skills: [],
  traces: [],
  eidolons: {},
)
