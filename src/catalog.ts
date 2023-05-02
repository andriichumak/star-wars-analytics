/* eslint-disable */
/* THIS FILE WAS AUTO-GENERATED USING CATALOG EXPORTER; YOU SHOULD NOT EDIT THIS FILE; GENERATE TIME: 2023-04-30T14:52:47.904Z; */
// @ts-ignore ignore unused imports here if they happen (e.g. when there is no measure in the workspace)
import { newAttribute, newMeasure, IAttribute, IMeasure, IMeasureDefinition, idRef } from "@gooddata/sdk-model";

/**
 * Attribute Title: Birth year
 * Attribute ID: birth_year
 */
export const BirthYear: IAttribute = newAttribute("birth_year");
/**
 * Attribute Title: Homeworld
 * Attribute ID: characters.homeworld
 */
export const Homeworld: IAttribute = newAttribute("characters.homeworld");
/**
 * Attribute Title: Name
 * Attribute ID: characters.name
 */
export const Name: IAttribute = newAttribute("characters.name");
/**
 * Attribute Title: Eye color
 * Attribute ID: eye_color
 */
export const EyeColor: IAttribute = newAttribute("eye_color");
/**
 * Attribute Title: Gender
 * Attribute ID: gender
 */
export const Gender: IAttribute = newAttribute("gender");
/**
 * Attribute Title: Hair color
 * Attribute ID: hair_color
 */
export const HairColor: IAttribute = newAttribute("hair_color");
/**
 * Attribute Title: Height
 * Attribute ID: height
 */
export const Height: IAttribute = newAttribute("height");
/**
 * Attribute Title: Mass
 * Attribute ID: mass
 */
export const Mass: IAttribute = newAttribute("mass");
/**
 * Attribute Title: Skin color
 * Attribute ID: skin_color
 */
export const SkinColor: IAttribute = newAttribute("skin_color");
/**
 * Attribute Title: Species
 * Attribute ID: species
 */
export const Species: IAttribute = newAttribute("species");
/**
 * Attribute Title: Climate
 * Attribute ID: climate
 */
export const Climate: IAttribute = newAttribute("climate");
/**
 * Attribute Title: Gravity
 * Attribute ID: gravity
 */
export const Gravity: IAttribute = newAttribute("gravity");
/**
 * Attribute Title: Orbital period
 * Attribute ID: orbital_period
 */
export const OrbitalPeriod: IAttribute = newAttribute("orbital_period");
/**
 * Attribute Title: Name
 * Attribute ID: planets.name
 */
export const Name_1: IAttribute = newAttribute("planets.name");
/**
 * Attribute Title: Rotation period
 * Attribute ID: rotation_period
 */
export const RotationPeriod: IAttribute = newAttribute("rotation_period");
/**
 * Attribute Title: Surface water
 * Attribute ID: surface_water
 */
export const SurfaceWater: IAttribute = newAttribute("surface_water");
/**
 * Attribute Title: Terrain
 * Attribute ID: terrain
 */
export const Terrain: IAttribute = newAttribute("terrain");
/**
 * Attribute Title: Average height
 * Attribute ID: average_height
 */
export const AverageHeight: IAttribute = newAttribute("average_height");
/**
 * Attribute Title: Average lifespan
 * Attribute ID: average_lifespan
 */
export const AverageLifespan: IAttribute = newAttribute("average_lifespan");
/**
 * Attribute Title: Classification
 * Attribute ID: classification
 */
export const Classification: IAttribute = newAttribute("classification");
/**
 * Attribute Title: Designation
 * Attribute ID: designation
 */
export const Designation: IAttribute = newAttribute("designation");
/**
 * Attribute Title: Eye colors
 * Attribute ID: eye_colors
 */
export const EyeColors: IAttribute = newAttribute("eye_colors");
/**
 * Attribute Title: Hair colors
 * Attribute ID: hair_colors
 */
export const HairColors: IAttribute = newAttribute("hair_colors");
/**
 * Attribute Title: Language
 * Attribute ID: language
 */
export const Language: IAttribute = newAttribute("language");
/**
 * Attribute Title: Skin colors
 * Attribute ID: skin_colors
 */
export const SkinColors: IAttribute = newAttribute("skin_colors");
/**
 * Attribute Title: Homeworld
 * Attribute ID: species.homeworld
 */
export const Homeworld_1: IAttribute = newAttribute("species.homeworld");
/**
 * Attribute Title: Name
 * Attribute ID: species.name
 */
export const Name_2: IAttribute = newAttribute("species.name");
/**
 * Attribute Title: Consumables
 * Attribute ID: starships.consumables
 */
export const Consumables: IAttribute = newAttribute("starships.consumables");
/**
 * Attribute Title: Firepower rating
 * Attribute ID: firepowerrating
 */
export const FirepowerRating: IAttribute = newAttribute("firepowerrating");
/**
 * Attribute Title: Manufacturer
 * Attribute ID: starships.manufacturer
 */
export const Manufacturer: IAttribute = newAttribute("starships.manufacturer");
/**
 * Attribute Title: Model
 * Attribute ID: starships.model
 */
export const Model: IAttribute = newAttribute("starships.model");
/**
 * Attribute Title: Name
 * Attribute ID: starships.name
 */
export const Name_3: IAttribute = newAttribute("starships.name");
/**
 * Attribute Title: Serves to
 * Attribute ID: serves_to
 */
export const ServesTo: IAttribute = newAttribute("serves_to");
/**
 * Attribute Title: Starship class
 * Attribute ID: starship_class
 */
export const StarshipClass: IAttribute = newAttribute("starship_class");
/**
 * Attribute Title: Vehicle class
 * Attribute ID: vehicle_class
 */
export const VehicleClass: IAttribute = newAttribute("vehicle_class");
/**
 * Attribute Title: Cargo capacity
 * Attribute ID: vehicles.cargo_capacity
 */
export const CargoCapacity: IAttribute = newAttribute("vehicles.cargo_capacity");
/**
 * Attribute Title: Consumables
 * Attribute ID: vehicles.consumables
 */
export const Consumables_1: IAttribute = newAttribute("vehicles.consumables");
/**
 * Attribute Title: Cost in credits
 * Attribute ID: vehicles.cost_in_credits
 */
export const CostInCredits: IAttribute = newAttribute("vehicles.cost_in_credits");
/**
 * Attribute Title: Crew
 * Attribute ID: vehicles.crew
 */
export const Crew: IAttribute = newAttribute("vehicles.crew");
/**
 * Attribute Title: Length
 * Attribute ID: vehicles.length
 */
export const Length: IAttribute = newAttribute("vehicles.length");
/**
 * Attribute Title: Manufacturer
 * Attribute ID: vehicles.manufacturer
 */
export const Manufacturer_1: IAttribute = newAttribute("vehicles.manufacturer");
/**
 * Attribute Title: Max atmosphering speed
 * Attribute ID: vehicles.max_atmosphering_speed
 */
export const MaxAtmospheringSpeed: IAttribute = newAttribute("vehicles.max_atmosphering_speed");
/**
 * Attribute Title: Model
 * Attribute ID: vehicles.model
 */
export const Model_1: IAttribute = newAttribute("vehicles.model");
/**
 * Attribute Title: Name
 * Attribute ID: vehicles.name
 */
export const Name_4: IAttribute = newAttribute("vehicles.name");
/**
 * Attribute Title: Passengers
 * Attribute ID: vehicles.passengers
 */
export const Passengers: IAttribute = newAttribute("vehicles.passengers");
/**
 * Metric Title: Actual shield rating
 * Metric ID: actual_shield_rating
 * Metric Type: MAQL Metric
 */
export const ActualShieldRating: IMeasure<IMeasureDefinition> = newMeasure(idRef("actual_shield_rating", "measure"));
/**
 * Metric Title: Battle Power Rating
 * Metric ID: battle_power_rating
 * Metric Type: MAQL Metric
 */
export const BattlePowerRating: IMeasure<IMeasureDefinition> = newMeasure(idRef("battle_power_rating", "measure"));
/**
 * Metric Title: Cost-speed ratio
 * Metric ID: cost-speed_ratio
 * Metric Type: MAQL Metric
 */
export const CostSpeedRatio: IMeasure<IMeasureDefinition> = newMeasure(idRef("cost-speed_ratio", "measure"));
/**
 * Metric Title: AVG cost of a ship
 * Metric ID: avg_cost_of_a_ship
 * Metric Type: MAQL Metric
 */
export const AVGCostOfAShip: IMeasure<IMeasureDefinition> = newMeasure(idRef("avg_cost_of_a_ship", "measure"));
/**
 * Metric Title: How many people fits into a ship
 * Metric ID: how_many_people_fits_into_a_ship
 * Metric Type: MAQL Metric
 */
export const HowManyPeopleFitsIntoAShip: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("how_many_people_fits_into_a_ship", "measure")
);
/**
 * Metric Title: Count of Starships
 * Metric ID: count_of_starships
 * Metric Type: MAQL Metric
 */
export const CountOfStarships: IMeasure<IMeasureDefinition> = newMeasure(idRef("count_of_starships", "measure"));
/**
 * Metric Title: Min cost of 1 firepower to achieve given rating
 * Metric ID: min_cost_to_achieve_firepower_rating
 * Metric Type: MAQL Metric
 */
export const MinCostOf1FirepowerToAchieveGivenRating: IMeasure<IMeasureDefinition> = newMeasure(
  idRef("min_cost_to_achieve_firepower_rating", "measure")
);
/**
 * Fact Title: Diameter
 * Fact ID: diameter
 */
export const Diameter = {
  /**
   * Fact Title: Diameter
   * Fact ID: diameter
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("diameter", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Diameter
   * Fact ID: diameter
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("diameter", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Diameter
   * Fact ID: diameter
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("diameter", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Diameter
   * Fact ID: diameter
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("diameter", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Diameter
   * Fact ID: diameter
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("diameter", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Diameter
   * Fact ID: diameter
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("diameter", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Population
 * Fact ID: population
 */
export const Population = {
  /**
   * Fact Title: Population
   * Fact ID: population
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("population", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Population
   * Fact ID: population
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("population", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Population
   * Fact ID: population
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("population", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Population
   * Fact ID: population
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("population", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Population
   * Fact ID: population
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("population", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Population
   * Fact ID: population
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("population", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Cargo capacity
 * Fact ID: starships.cargo_capacity
 */
export const CargoCapacity_1 = {
  /**
   * Fact Title: Cargo capacity
   * Fact ID: starships.cargo_capacity
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("starships.cargo_capacity", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Cargo capacity
   * Fact ID: starships.cargo_capacity
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("starships.cargo_capacity", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Cargo capacity
   * Fact ID: starships.cargo_capacity
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("starships.cargo_capacity", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Cargo capacity
   * Fact ID: starships.cargo_capacity
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("starships.cargo_capacity", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Cargo capacity
   * Fact ID: starships.cargo_capacity
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("starships.cargo_capacity", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Cargo capacity
   * Fact ID: starships.cargo_capacity
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("starships.cargo_capacity", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Cost in credits
 * Fact ID: starships.cost_in_credits
 */
export const CostInCredits_1 = {
  /**
   * Fact Title: Cost in credits
   * Fact ID: starships.cost_in_credits
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("starships.cost_in_credits", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Cost in credits
   * Fact ID: starships.cost_in_credits
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("starships.cost_in_credits", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Cost in credits
   * Fact ID: starships.cost_in_credits
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("starships.cost_in_credits", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Cost in credits
   * Fact ID: starships.cost_in_credits
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("starships.cost_in_credits", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Cost in credits
   * Fact ID: starships.cost_in_credits
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("starships.cost_in_credits", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Cost in credits
   * Fact ID: starships.cost_in_credits
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("starships.cost_in_credits", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Crew
 * Fact ID: starships.crew
 */
export const Crew_1 = {
  /**
   * Fact Title: Crew
   * Fact ID: starships.crew
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("starships.crew", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Crew
   * Fact ID: starships.crew
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("starships.crew", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Crew
   * Fact ID: starships.crew
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("starships.crew", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Crew
   * Fact ID: starships.crew
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("starships.crew", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Crew
   * Fact ID: starships.crew
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("starships.crew", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Crew
   * Fact ID: starships.crew
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("starships.crew", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Crew rating
 * Fact ID: crew_rating
 */
export const CrewRating = {
  /**
   * Fact Title: Crew rating
   * Fact ID: crew_rating
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("crew_rating", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Crew rating
   * Fact ID: crew_rating
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("crew_rating", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Crew rating
   * Fact ID: crew_rating
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("crew_rating", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Crew rating
   * Fact ID: crew_rating
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("crew_rating", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Crew rating
   * Fact ID: crew_rating
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("crew_rating", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Crew rating
   * Fact ID: crew_rating
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("crew_rating", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Firepower rating
 * Fact ID: firepower_rating
 */
export const FirepowerRating_1 = {
  /**
   * Fact Title: Firepower rating
   * Fact ID: firepower_rating
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("firepower_rating", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Firepower rating
   * Fact ID: firepower_rating
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("firepower_rating", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Firepower rating
   * Fact ID: firepower_rating
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("firepower_rating", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Firepower rating
   * Fact ID: firepower_rating
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("firepower_rating", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Firepower rating
   * Fact ID: firepower_rating
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("firepower_rating", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Firepower rating
   * Fact ID: firepower_rating
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("firepower_rating", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Hyperdrive rating
 * Fact ID: hyperdrive_rating
 */
export const HyperdriveRating = {
  /**
   * Fact Title: Hyperdrive rating
   * Fact ID: hyperdrive_rating
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("hyperdrive_rating", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Hyperdrive rating
   * Fact ID: hyperdrive_rating
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("hyperdrive_rating", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Hyperdrive rating
   * Fact ID: hyperdrive_rating
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("hyperdrive_rating", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Hyperdrive rating
   * Fact ID: hyperdrive_rating
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("hyperdrive_rating", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Hyperdrive rating
   * Fact ID: hyperdrive_rating
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("hyperdrive_rating", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Hyperdrive rating
   * Fact ID: hyperdrive_rating
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("hyperdrive_rating", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Hyperspace rating
 * Fact ID: hyperspace_rating
 */
export const HyperspaceRating = {
  /**
   * Fact Title: Hyperspace rating
   * Fact ID: hyperspace_rating
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("hyperspace_rating", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Hyperspace rating
   * Fact ID: hyperspace_rating
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("hyperspace_rating", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Hyperspace rating
   * Fact ID: hyperspace_rating
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("hyperspace_rating", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Hyperspace rating
   * Fact ID: hyperspace_rating
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("hyperspace_rating", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Hyperspace rating
   * Fact ID: hyperspace_rating
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("hyperspace_rating", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Hyperspace rating
   * Fact ID: hyperspace_rating
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("hyperspace_rating", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Length
 * Fact ID: starships.length
 */
export const Length_1 = {
  /**
   * Fact Title: Length
   * Fact ID: starships.length
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("starships.length", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Length
   * Fact ID: starships.length
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("starships.length", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Length
   * Fact ID: starships.length
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("starships.length", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Length
   * Fact ID: starships.length
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("starships.length", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Length
   * Fact ID: starships.length
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("starships.length", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Length
   * Fact ID: starships.length
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("starships.length", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Maneuverability rating
 * Fact ID: maneuverability_rating
 */
export const ManeuverabilityRating = {
  /**
   * Fact Title: Maneuverability rating
   * Fact ID: maneuverability_rating
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("maneuverability_rating", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Maneuverability rating
   * Fact ID: maneuverability_rating
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("maneuverability_rating", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Maneuverability rating
   * Fact ID: maneuverability_rating
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("maneuverability_rating", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Maneuverability rating
   * Fact ID: maneuverability_rating
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("maneuverability_rating", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Maneuverability rating
   * Fact ID: maneuverability_rating
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("maneuverability_rating", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Maneuverability rating
   * Fact ID: maneuverability_rating
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("maneuverability_rating", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Max atmosphering speed
 * Fact ID: starships.max_atmosphering_speed
 */
export const MaxAtmospheringSpeed_1 = {
  /**
   * Fact Title: Max atmosphering speed
   * Fact ID: starships.max_atmosphering_speed
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("starships.max_atmosphering_speed", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Max atmosphering speed
   * Fact ID: starships.max_atmosphering_speed
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("starships.max_atmosphering_speed", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Max atmosphering speed
   * Fact ID: starships.max_atmosphering_speed
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("starships.max_atmosphering_speed", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Max atmosphering speed
   * Fact ID: starships.max_atmosphering_speed
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("starships.max_atmosphering_speed", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Max atmosphering speed
   * Fact ID: starships.max_atmosphering_speed
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("starships.max_atmosphering_speed", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Max atmosphering speed
   * Fact ID: starships.max_atmosphering_speed
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("starships.max_atmosphering_speed", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Mglt
 * Fact ID: MGLT
 */
export const Mglt = {
  /**
   * Fact Title: Mglt
   * Fact ID: MGLT
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("MGLT", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Mglt
   * Fact ID: MGLT
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("MGLT", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Mglt
   * Fact ID: MGLT
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("MGLT", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Mglt
   * Fact ID: MGLT
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("MGLT", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Mglt
   * Fact ID: MGLT
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("MGLT", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Mglt
   * Fact ID: MGLT
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("MGLT", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Passengers
 * Fact ID: starships.passengers
 */
export const Passengers_1 = {
  /**
   * Fact Title: Passengers
   * Fact ID: starships.passengers
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("starships.passengers", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Passengers
   * Fact ID: starships.passengers
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("starships.passengers", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Passengers
   * Fact ID: starships.passengers
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("starships.passengers", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Passengers
   * Fact ID: starships.passengers
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("starships.passengers", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Passengers
   * Fact ID: starships.passengers
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("starships.passengers", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Passengers
   * Fact ID: starships.passengers
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("starships.passengers", "fact"), (m) => m.aggregation("runsum")),
};
/**
 * Fact Title: Shield rating
 * Fact ID: shield_rating
 */
export const ShieldRating = {
  /**
   * Fact Title: Shield rating
   * Fact ID: shield_rating
   * Fact Aggregation: sum
   */
  Sum: newMeasure(idRef("shield_rating", "fact"), (m) => m.aggregation("sum"))
  /**
   * Fact Title: Shield rating
   * Fact ID: shield_rating
   * Fact Aggregation: avg
   */,
  Avg: newMeasure(idRef("shield_rating", "fact"), (m) => m.aggregation("avg"))
  /**
   * Fact Title: Shield rating
   * Fact ID: shield_rating
   * Fact Aggregation: min
   */,
  Min: newMeasure(idRef("shield_rating", "fact"), (m) => m.aggregation("min"))
  /**
   * Fact Title: Shield rating
   * Fact ID: shield_rating
   * Fact Aggregation: max
   */,
  Max: newMeasure(idRef("shield_rating", "fact"), (m) => m.aggregation("max"))
  /**
   * Fact Title: Shield rating
   * Fact ID: shield_rating
   * Fact Aggregation: median
   */,
  Median: newMeasure(idRef("shield_rating", "fact"), (m) => m.aggregation("median"))
  /**
   * Fact Title: Shield rating
   * Fact ID: shield_rating
   * Fact Aggregation: runsum
   */,
  Runsum: newMeasure(idRef("shield_rating", "fact"), (m) => m.aggregation("runsum")),
};
/** Available Date Data Sets */
export const DateDatasets = {};
export const Insights = {
  /**
   * Insight Title: What is the biggest Starship?
   * Insight ID: 11491d44-86dd-40a7-8995-ceece06ebdef
   */
  WhatIsTheBiggestStarship: "11491d44-86dd-40a7-8995-ceece06ebdef"
  /**
   * Insight Title: Number of Starships
   * Insight ID: 0e027413-ebef-431f-9c5e-8022202b1f4f
   */,
  NumberOfStarships: "0e027413-ebef-431f-9c5e-8022202b1f4f"
  /**
   * Insight Title: What is the fastest ship in space?
   * Insight ID: d2b9fbcf-f419-48e2-be42-758a66beaad8
   */,
  WhatIsTheFastestShipInSpace: "d2b9fbcf-f419-48e2-be42-758a66beaad8"
  /**
   * Insight Title: What is the fastest ship in atmosphere?
   * Insight ID: 69716447-cab3-4e99-b1ce-955822c80a12
   */,
  WhatIsTheFastestShipInAtmosphere: "69716447-cab3-4e99-b1ce-955822c80a12"
  /**
   * Insight Title: How many people can fit in?
   * Insight ID: 49fd40f9-69a2-4468-a374-9c744720b254
   */,
  HowManyPeopleCanFitIn: "49fd40f9-69a2-4468-a374-9c744720b254"
  /**
   * Insight Title: Number of planets
   * Insight ID: c0a9aec5-51df-43a8-b50d-2957b4a8ed81
   */,
  NumberOfPlanets: "c0a9aec5-51df-43a8-b50d-2957b4a8ed81"
  /**
   * Insight Title: What is the typical climate?
   * Insight ID: b1c037ab-25a2-42b0-b594-f1a358de1662
   */,
  WhatIsTheTypicalClimate: "b1c037ab-25a2-42b0-b594-f1a358de1662"
  /**
   * Insight Title: Planets with most population
   * Insight ID: e99c029c-1c6a-4e05-97d0-19f59839b422
   */,
  PlanetsWithMostPopulation: "e99c029c-1c6a-4e05-97d0-19f59839b422"
  /**
   * Insight Title: Initial Starships to pick
   * Insight ID: b71e7a94-37c5-4a76-93d6-ec113be13d99
   */,
  InitialStarshipsToPick: "b71e7a94-37c5-4a76-93d6-ec113be13d99"
  /**
   * Insight Title: Most expensive Starships
   * Insight ID: 3f0ef411-4800-4424-b327-7bbfa49ec17c
   */,
  MostExpensiveStarships: "3f0ef411-4800-4424-b327-7bbfa49ec17c"
  /**
   * Insight Title: Starship firepower
   * Insight ID: 984dc9c4-700a-4ae1-9e60-dabbaa235542
   */,
  StarshipFirepower: "984dc9c4-700a-4ae1-9e60-dabbaa235542"
  /**
   * Insight Title: Distribution of starships models
   * Insight ID: 7b12a526-32c1-40e7-9396-1c9b8127aad4
   */,
  DistributionOfStarshipsModels: "7b12a526-32c1-40e7-9396-1c9b8127aad4"
  /**
   * Insight Title: Starships list
   * Insight ID: c9598d3c-8479-45e7-b306-fc173f43892b
   */,
  StarshipsList: "c9598d3c-8479-45e7-b306-fc173f43892b"
  /**
   * Insight Title: Battle rating
   * Insight ID: 9cfedff9-d434-4271-9a49-f387e0395d23
   */,
  BattleRating: "9cfedff9-d434-4271-9a49-f387e0395d23"
  /**
   * Insight Title: How much does 1 MGLT cost?
   * Insight ID: ffcd2465-1d9d-4fce-a824-353e28d86a39
   */,
  HowMuchDoes1MGLTCost: "ffcd2465-1d9d-4fce-a824-353e28d86a39"
  /**
   * Insight Title: Comparison of Star destroyers - firepower
   * Insight ID: 114f59c0-e31e-429a-a785-df938c774913
   */,
  ComparisonOfStarDestroyersFirepower: "114f59c0-e31e-429a-a785-df938c774913"
  /**
   * Insight Title: X-wing vs Tie
   * Insight ID: 67640df5-f196-4625-b181-45b33adb6114
   */,
  XWingVsTie: "67640df5-f196-4625-b181-45b33adb6114"
  /**
   * Insight Title: Distribution of ships
   * Insight ID: 98fabf46-cbfc-41e6-ab92-e3689ca383bf
   */,
  DistributionOfShips: "98fabf46-cbfc-41e6-ab92-e3689ca383bf"
  /**
   * Insight Title: Comparison of Star destroyers - cost
   * Insight ID: 6c2c0a2e-40b0-44cb-b137-6abb4fa2d357
   */,
  ComparisonOfStarDestroyersCost: "6c2c0a2e-40b0-44cb-b137-6abb4fa2d357"
  /**
   * Insight Title: Comparison of Star destroyers - size
   * Insight ID: 806cfd74-9b79-436c-9b61-e4f2ef3a105c
   */,
  ComparisonOfStarDestroyersSize: "806cfd74-9b79-436c-9b61-e4f2ef3a105c"
  /**
   * Insight Title: How much does a firepower cost?
   * Insight ID: eaf8eb99-a5cb-46a5-8e8d-ec88ba20c7cf
   */,
  HowMuchDoesAFirepowerCost: "eaf8eb99-a5cb-46a5-8e8d-ec88ba20c7cf"
  /**
   * Insight Title: Ships with lowest cost of MGLT
   * Insight ID: ceda96e9-8a9f-4d3d-a045-67c237e88a5f
   */,
  ShipsWithLowestCostOfMGLT: "ceda96e9-8a9f-4d3d-a045-67c237e88a5f",
};
export const Dashboards = {};
