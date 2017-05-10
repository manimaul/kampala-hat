'use strict';

import React from 'react';
import {Router, Route, Link, hashHistory} from 'react-router';
import Footer from './Footer';
import Hero from './Hero';
import Menu from './Menu';
import HatTabs from './HatTabs';
import HatConstants from './Constants';

export default class HatTerms extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    onInfoWindowCloseClick() {
        let state = {
            marker_info: this.createMarker(),
        };
        this.setState(state);
    }

    render() {
        return (
            <div>
                <Menu/>
                <Hero titleImage={"images/madrona_logo-nq8.png"}/>

                <HatTabs routeName={HatConstants.routeTerms}/>

                <div className="container">
                    <h2>Terms and Conditions for The Mobile First App Hack-A-Thon</h2>
                    <h4>By participating in The Mobile First App Hack-A-Thon, you agree to be bound by the decisions of MADRONA and AIR SAVE, which are final and binding in all respects and agree to the following terms and conditions:</h4>
                    <ul>
                        <li>Method of entry and registration notification:</li>
                        <p>Entry is FREE. To register, please visit website and complete the registration form in accordance with the instructions.</p>
                        <li>Registration Deadline is 20th May, 2017. Attendance shall be confirmed as follows:</li>
                        <ol>
                            <li>All successful entrants shall be notified by 23rd May 2017.</li>
                            <li>If one registers but does not receive an acceptance confirmation by 23rd May, they shall not be eligible to participate in the challenge.</li>
                            <li>Acceptance confirmation will be via E-mail or Phone call.</li>
                        </ol>
                        <li>Participation structure:</li>
                        The Mobile First App Hack-A-Thon will focus on be building a "Mobile First" application as an iOS app, Android app, or Responsive Web App. We are purposefully leaving this open-ended to make room for your creativity.
                        <li>Development</li>
                        <ol>
                            <li>Participants may register solo or in teams </li>
                            <li>A team will have a maximum of 5 Members</li>
                            <li>A maximum of 30 teams will participate in the challenge</li>
                            <li>It is expected that teams will create working Prototypes of Applications.</li>
                        </ol>

                        <li>Time period</li>
                            <ol>
                                <li>The App Challenge will run from 26th May, 2017 to 28th May, 2017.</li>
                                <li>Winners of the Awards will be selected by a judge of panels.</li>
                                <li>Selection will occur after the teams have performed demos as per the event program.</li>
                            </ol>

                        <li>Eligibility</li>
                            <ol>
                                <li>The Challenge is open to all residents in Uganda and citizens of Uganda over the age of 18 years old.</li>
                            </ol>
                        <li>Awards and Prizes All Awards will be chosen and given out on the 28th May 2017 as per the event program.</li>
                        <ol>
                            <li>$5,000 USD 1st place award</li>
                            <li>Certificate of Recognition for Each Team Member</li>
                        </ol>
                        <li>MADRONA and AIR SAVE reserves the right to disqualify any team for any reason, in its sole and absolute discretion, including the determination in its sole discretion that the application or team does not satisfy any of the above guidelines, or is inconsistent with the goals, image or policies of MADRONA or AIR SAVE.</li>
                    </ul>

                    <h4>Terms and Conditions</h4>

                    <ul>
                        <li>All taxes and other expenses associated with the prize are the Winners’ sole responsibility.</li>
                        <li>The prize is not transferable and will be handed out to the team with all Participants present with terms and conditions.</li>
                        <li>You agree to sign and return within a specified time, an affidavit of eligibility, a liability/publicity release and any other forms or documents required by MADRONA and AIR SAVE or by the tax authority, or any other governmental authority, as a condition of receiving a prize.</li>
                        <li>MADRONA and AIR SAVE reserve the right to void any application submitted for a prize, if it believes such application was submitted other than as contemplated by these terms and conditions, or that the application has been tampered with in any manner.</li>
                        <li>If in MADRONA or AIR SAVE’s discretion, it is determined that you have not complied with these terms and conditions and/or MADRONA and AIR SAVE are unable to contact you within a reasonable time period and/or you have failed to properly execute and return any required documents, within the specified time period and/or you have made false statements, and/or any notification is returned as undeliverable; then you will be disqualified.</li>
                        <li>Should you make any false statement(s) in any document required by MADRONA and AIR SAVE you will be disqualified.</li>
                        <li>If you are disqualified for any reason, at MADRONA and AIR SAVE’s discretion, a runner-up may be selected and/or issued with the applicable prize, at MADRONA and AIR SAVE’s sole discretion.</li>
                        <li> All teams will be required to demo the App prototypes created at the event as per the event program, following which a panel of judges will chose the winning Apps.</li>
                        <li> In the event that you are chosen as Winner but decline the prize, it will be cancelled and MADRONA and AIR SAVE will select another winner.</li>
                        <li> MADRONA and AIR SAVE have the right to remove and/or reject any application that violates intellectual property rights of others (including trademark, copyright, patent, trade secret, and other proprietary rights) or applications/content that encourages or induces infringement of intellectual property rights. All Application developers should own the Intellectual Property of content created.</li>
                        <li> MADRONA and AIR SAVE do not allow applications with misleading information or claims including in the description, title, icon and screenshots.</li>
                        <li> MADRONA and AIR SAVE expressly disclaims all warranties and conditions of any kind, whether express or implied, including but not limited to the implied warranty and condition of non-infringement.</li>
                        <li>You acknowledge that there are many app developers, many individuals and companies developing the same idea, concepts or content resulting in development of similar apps/content at any one time and MADRONA and AIR SAVE is at liberty to engage and onboard applications from such developers, individuals and companies in this respect and that MADRONA and AIR SAVE may currently or in future be developing information/Applications/content internally, or receiving information/Applications/content from other parties, that is similar or identical to Your application/information/content. Accordingly, nothing in these Terms and Conditions will be construed as a representation of Agreement that MADRONA and AIR SAVE will not develop or have developed for it products, concepts, systems or techniques that are similar to or compete with the products, concepts, systems or techniques developed by You during this event.</li>
                        <li> MADRONA and AIR SAVE shall not be liable under any theory of liability for any direct, indirect, incidental, special, consequential or exemplary damages that may be incurred by You during your participation in the Hack-A-Thon, including any loss of data, whether or not MADRONA and AIR SAVE or its representatives have been advised of or should have been aware of the possibility of such loss arising. However, MADRONA encourages you to use the available legal processes to protect your source codes, designs, graphics, app name, app icon and any written content to prevent any infringement.</li>
                    </ul>

                    <h4>Indemnification</h4>

                    <ul>
                        <li>You (in the case of a team, all members of your team jointly and severally) agree to indemnify and hold MADRONA and AIR SAVE, its affiliated entities, and their respective employees, officers, agents, licensees, and assigns, harmless from any claim and/or liability arising from your failure to obtain the permissions and grants of authority described in these terms and conditions including all claims for infringement of copyright or any form of intellectual property.</li>
                        <li>You (in the case of a team, all members of your team jointly and severally) further agree to indemnify MADRONA and AIR SAVE, its affiliated entities, and their respective employees, officers, directors, agents, licensees, and assigns, harmless from any and all liability howsoever arising including oversight, negligence, or willful misconduct.</li>
                    </ul>

                    <h4>Rights of MADRONA and AIR SAVE</h4>

                    <ul>
                        <li>By Participating in the Hack-A-Thon, you further grant and assign to MADRONA and AIR SAVE an irrevocable, perpetual, royalty-free, transferable license to use the application for Media, PR and any other communication related activities. You also acknowledge that MADRONA and AIR SAVE shall be the only brand with right to use the application/content developed for Media, PR and other communication related activities.</li>
                        <li>By entering this Hack-A-Thon, you agree and consent to MADRONA and AIR SAVE’s collection, use and retention of the personal information that you provide to MADRONA and AIR SAVE for all purposes related to this Hack-A-Thon (including, but not limited to, processing and administering entries, sharing an entrant’s personal information with MADRONA’s and AIR SAVE service providers and contractors as necessary to conduct and operate the Hack-A-Thon, communicating with and awarding prizes to winners, making public announcements about winners, and advertising, promoting and publicizing this Hack-A-Thon). You also acknowledge that your information may be subject to the privacy policies of third parties and understand that the use of your data by any such third party is subject to the applicable privacy policy and that MADRONA and AIR SAVE is not responsible for such use.</li>
                        <li>Attribution; All Apps created in The Mobile First App Hack-A-Thon will be required to have the “MADRONA and AIR SAVE badge” indicated on them in commercialization on any related communication. The badge will be designed and provided by MADRONA. The App will indicate that the App has been created through The Mobile First App Hack-A-Thon.</li>
                        <li>You (in the case of a team, all members of your team jointly and severally) agree that MADRONA and AIR SAVE and its agents, in their sole discretion, may choose not to use your application.</li>
                    </ul>

                    <h4>General terms</h4>

                    <ul>
                        <li>The Hack-A-Thon will be cancelled where it is void in whole, or in part where prohibited by law.</li>
                        <li>MADRONA and AIR SAVE are not responsible for any entry that is incomplete or incorrect, or for any failures, errors, or delays with respect to submission of any entry.</li>
                        <li>Any attempt by you to deliberately interfere with or manipulate the Hack-A-Thon may be a violation of criminal and/or civil law and may result, among other things, in disqualification from the Hack-A-Thon.</li>
                        <li>MADRONA and AIR SAVE reserve the right, without prior notice and at any time, to terminate or suspend the Hack-A-Thon, in whole or in part, or to modify the Hack-A-Thon, should any factor (including but not limited to fraud or security breach) interfere with the Hack-A-Thon as contemplated by these terms and conditions or if MADRONA and AIR SAVE believes that the Hack-A-Thon has been or will be compromised in any way.</li>
                        <li>Ugandan law shall govern this Hack-A-Thon. Any litigation of a dispute arising out of, or in connection with the Hack-A-Thon shall be subject to the sole and exclusive jurisdiction of Ugandan courts. By participating you irrevocably submit to the sole and exclusive jurisdiction of such courts for such purpose and waive any objection in connection with the same.</li>
                    </ul>
                    <img className="img-responsive" src="images/mfht.jpg"/>
                </div>
                <Footer/>
            </div>
        )
    }
}