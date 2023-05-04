import React from "react";
import { BackendProvider, WorkspaceProvider } from "@gooddata/sdk-ui";

import { backend } from "../../backend";
import { FocusShipProvider } from "../../hooks/focusShip";
import { ShipsProvider, useShips } from "../../hooks/shipsList";
import { Header } from "../Header";
import { AllShipsSection } from "../AllShipsSection";
import { BarChart } from "../BarChart";
import { HelperBarChart } from "../HelperBarChart";
import { ShipsBySide } from "../ShipsBySide";
import * as cat from "../../catalog";
import { formatMeters, formatMGLT, formatCredits, formatSpeedAtm } from "../../constants";
import { modifyMeasure } from "@gooddata/sdk-model";
import executor from "../../assets/executor.svg";
import aWing from "../../assets/a-wing.svg";
import section_head from "../../assets/section_head.svg";
import section_break from "../../assets/section_break.svg";
import section_footer from "../../assets/section_footer.svg";

const workspaceId = "70632fd6849b4a4095005a5ee07b0f20";

export const App: React.FC = () => {
    const [focusShip, setFocusShip] = React.useState<string | null>(null);
    const shipsContextValue = useShips(backend, workspaceId);

    return (
        <BackendProvider backend={backend}>
            <WorkspaceProvider workspace={workspaceId}>
                <FocusShipProvider value={focusShip}>
                    <ShipsProvider value={shipsContextValue}>
                        <Header setFocusShip={setFocusShip} />
                        <article>
                            <section className="text_centered">
                                <h1>How many ships are there anyway?</h1>
                                <p>Star Wars has shown us many spectacular battles and even more ships. But have you ever wondered how many models has appeared in the movies?</p>
                                <ShipsBySide />
                            </section>
                            <section className="page_section">
                                <div className="page_section__description">
                                    <div className="page_section__description__cell">
                                        <h1>What is the biggest ship in the galaxy?</h1>
                                        <p>The biggest ship in the galaxy is by far the dark-sides <span className="text_dark_side">Executor</span>. Nothing can match its admirable size.</p>  
                                    </div>
                                    <div className="page_section__description__cell">
                                        <img src={executor} alt="Executor" />
                                    </div>
                                </div>
                                <div>
                                    <img src={section_head} alt="Section head" style={{display: "block"}} />
                                </div>
                                <div className="page_section__main_chart">
                                    <BarChart
                                        metric={modifyMeasure(cat.Length_1.Avg, m => m.format(formatMeters))}
                                        viewBy={cat.Name_3}
                                        softFilter={item => !["Death Star"].includes(item.key)}
                                    />
                                </div>
                                <div>
                                    <img src={section_break} alt="Section break" style={{display: "block"}} />
                                </div>
                                <div className="page_section__helper_charts">
                                    <div className="page_section__helper_charts__cell">
                                        <h2>How many people can fit in?</h2>
                                        <p>Sum of crew and passengers</p>
                                        <HelperBarChart
                                            metric={cat.HowManyPeopleFitsIntoAShip}
                                            viewBy={cat.Name_3}
                                            softFilter={item => item.key !== "Death Star"}
                                        />
                                    </div>
                                    <div className="page_section__helper_charts__cell">
                                        <h2>How much do they cost?</h2>
                                        <p>In credits</p>
                                        <HelperBarChart
                                            metric={modifyMeasure(cat.CostInCredits_1.Avg, m => m.format(formatCredits))}
                                            viewBy={cat.Name_3}
                                            softFilter={item => item.key !== "Death Star"}
                                        />
                                    </div>
                                </div>
                                <div className="page_section__footer">
                                    <img src={section_footer} alt="Section footer" />
                                </div>
                            </section>
                            <section className="page_section">
                                <div className="page_section__description">
                                    <div className="page_section__description__cell">
                                        <h1>What's the fastest ship in the galaxy?</h1>
                                        <p>The fastest ship in the galaxy is the light-sides <span className="text_light_side">A-Wing</span>. Sorry, Millennium Falcon.</p>  
                                    </div>
                                    <div className="page_section__description__cell">
                                        <img src={aWing} alt="A-Wing" />
                                    </div>
                                </div>
                                <div>
                                    <img src={section_head} alt="Section head" style={{display: "block"}} />
                                </div>
                                <div className="page_section__main_chart">
                                    <BarChart
                                        metric={modifyMeasure(cat.Mglt.Avg, m => m.format(formatMGLT))}
                                        viewBy={cat.Name_3}
                                    />
                                </div>
                                <div>
                                    <img src={section_break} alt="Section break" style={{display: "block"}} />
                                </div>
                                <div className="page_section__helper_charts">
                                    <div className="page_section__helper_charts__cell">
                                        <h2>What's the fastest ship in the atmosphere?</h2>
                                        <p>In kph</p>
                                        <HelperBarChart
                                            metric={modifyMeasure(cat.MaxAtmospheringSpeed_1.Avg, m => m.format(formatSpeedAtm))}
                                            viewBy={cat.Name_3}
                                        />
                                    </div>
                                    <div className="page_section__helper_charts__cell">
                                        <h2>Ships with lowest cost per MGLT</h2>
                                        <p>In credits per MGLT</p>
                                        <HelperBarChart
                                            metric={modifyMeasure(cat.CostSpeedRatio, m => m.format(formatCredits))}
                                            viewBy={cat.Name_3}
                                            softFilter={item => item.key !== "Death Star"}
                                            desc
                                        />
                                    </div>
                                </div>
                                <div className="page_section__footer">
                                    <img src={section_footer} alt="Section footer" />
                                </div>
                            </section>
                            <section className="page_section">
                                <div className="page_section__description">
                                    <div className="page_section__description__cell">
                                        <h1>What is the deadliest ship in the galaxy?</h1>
                                        <p>Excluding the <span className="text_dark_side">Death Star</span>, of course.</p>  
                                    </div>
                                    <div className="page_section__description__cell">
                                        <img src={executor} alt="Executor" />
                                    </div>
                                </div>
                                <div>
                                    <img src={section_head} alt="Section head" style={{display: "block"}} />
                                </div>
                                <div className="page_section__main_chart page_section__main_chart--close-bottom">
                                    <BarChart
                                        metric={cat.FirepowerRating_1.Avg}
                                        viewBy={cat.Name_3}
                                        softFilter={item => item.key !== "Death Star"}
                                    />
                                </div>
                            </section>
                            <section className="section_table">
                                <h1>List of all ships</h1>
                                <p>See the specs for yourself</p>
                                <AllShipsSection />
                            </section>
                            <section className="text_centered">
                                <h1>Have we caugth your attention?</h1>
                                <p>Launch GoodData with a 30-day trial</p>
                                <div className="button-bar">
                                    <a href="https://www.gooddata.com/trial/?utm_medium=blogpost&utm_source=medium.com&utm_campaign=gooddata_star_wars_052023&utm_content=autor_patrik" target="_blank" className="button-bar__dark-side">Start for free</a>
                                    <a href="https://www.gooddata.com/trial/?utm_medium=blogpost&utm_source=medium.com&utm_campaign=gooddata_star_wars_052023&utm_content=autor_patrik" target="_blank" className="button-bar__light-side">Start for free</a>
                                </div>
                            </section>
                        </article>
                    </ShipsProvider>
                </FocusShipProvider>
            </WorkspaceProvider>
        </BackendProvider>
    );
};
