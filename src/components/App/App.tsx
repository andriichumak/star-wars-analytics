import React from "react";
import { BackendProvider, WorkspaceProvider } from "@gooddata/sdk-ui";

import { backend } from "../../backend";
import { FocusShipProvider } from "../../hooks/focusShip";
import { ShipsProvider, useShips } from "../../hooks/shipsList";
import { Header } from "../Header";
import { AllShipsSection } from "../AllShipsSection";
import { BarChart } from "../BarChart";
import { HelperBarChart } from "../HelperBarChart";
import * as cat from "../../catalog";
import { formatLargeNumbers } from "../../constants";
import { modifyMeasure } from "@gooddata/sdk-model";
import executor from "../../assets/executor.svg";
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
                            <section className="page_section">
                                <div className="page_section__description">
                                    <div className="page_section__description__cell">
                                        <h2>What is the biggest ship in the galaxy?</h2>
                                        <p>The biggest ship in the galexy is by far the dark-side <span className="text_dark_side">Executor</span>. Nothing can match it's admirable size.</p>  
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
                                        metric={modifyMeasure(cat.Length_1.Avg, m => m.format(formatLargeNumbers))}
                                        viewBy={cat.Name_3}
                                        softFilter={item => !["Death Star", "T-70 X-Wing Fighter"].includes(item.key)}
                                        legend="Length, meters"
                                    />
                                </div>
                                <div>
                                    <img src={section_break} alt="Section break" style={{display: "block"}} />
                                </div>
                                <div className="page_section__helper_charts">
                                    <div className="page_section__helper_charts__cell">
                                        <h3>How many people can fit in?</h3>
                                        <p>Measured as sum of crew and passengers</p>
                                        <HelperBarChart
                                            metric={modifyMeasure(cat.HowManyPeopleFitsIntoAShip, m => m.format(formatLargeNumbers))}
                                            viewBy={cat.Name_3}
                                            softFilter={item => item.key !== "Death Star"}
                                            legend="People: "
                                        />
                                    </div>
                                    <div className="page_section__helper_charts__cell">
                                        <h3>How much do they cost?</h3>
                                        <p>In credits</p>
                                        <HelperBarChart
                                            metric={modifyMeasure(cat.CostInCredits_1.Avg, m => m.format(formatLargeNumbers))}
                                            viewBy={cat.Name_3}
                                            softFilter={item => item.key !== "Death Star"}
                                            legend="Credits: "
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
                                        <h2>What's the fastest ship in the galaxy?</h2>
                                        <p>The fastest ship in the galexy is the light-side <span className="text_light_side">A-Wing</span>. Sorry, Millenium Falcon.</p>  
                                    </div>
                                    <div className="page_section__description__cell">
                                        <img src={executor} alt="A-Wing" />
                                    </div>
                                </div>
                                <div>
                                    <img src={section_head} alt="Section head" style={{display: "block"}} />
                                </div>
                                <div className="page_section__main_chart">
                                    <BarChart
                                        metric={cat.Mglt.Avg}
                                        viewBy={cat.Name_3}
                                        legend="Speed, MGLT"
                                    />
                                </div>
                                <div>
                                    <img src={section_break} alt="Section break" style={{display: "block"}} />
                                </div>
                                <div className="page_section__helper_charts">
                                    <div className="page_section__helper_charts__cell">
                                        <h3>What's the fastest ship in atmosphere?</h3>
                                        <p>In km/h</p>
                                        <HelperBarChart
                                            metric={cat.MaxAtmospheringSpeed_1.Avg}
                                            viewBy={cat.Name_3}
                                            legend="Speed, km/h: "
                                        />
                                    </div>
                                    <div className="page_section__helper_charts__cell">
                                        <h3>Ships with lowest cost per MGLT</h3>
                                        <p>Credits per MGLT</p>
                                        <HelperBarChart
                                            metric={modifyMeasure(cat.CostSpeedRatio, m => m.format(formatLargeNumbers))}
                                            viewBy={cat.Name_3}
                                            softFilter={item => item.key !== "Death Star"}
                                            legend="Cost per MGLT: "
                                            desc
                                        />
                                    </div>
                                </div>
                                <div className="page_section__footer">
                                    <img src={section_footer} alt="Section footer" />
                                </div>
                            </section>
                            <section>
                                <h2>What is the deadliest ship in the galaxy?</h2>
                                <p>Excluding the <span className="text_dark_side">Death Star</span>, of course.</p>
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                                    <BarChart
                                        metric={cat.FirepowerRating_1.Avg}
                                        viewBy={cat.Name_3}
                                        softFilter={item => item.key !== "Death Star"}
                                        legend="Firepower rating"
                                    />
                                </div>
                            </section>
                            <section>
                                <h2>List of all ships</h2>
                                <p>See the specs for yourself</p>
                                <AllShipsSection />
                            </section>
                        </article>
                    </ShipsProvider>
                </FocusShipProvider>
            </WorkspaceProvider>
        </BackendProvider>
    );
};
