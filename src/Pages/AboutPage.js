import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import html5 from '../img/html5.svg';
import gdesign from '../img/gdesign.png';
import res from '../img/responsive.png';
import bug from '../img/bugs.png';


function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'Mongo DB'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Express JS'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'React Js'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Node Js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Typescript'} progress={'30%'} width={'30%'} />
                <SkillsSection skill={'Bootstrap'} progress={'75%'} width={'75%'} />
                <SkillsSection skill={'Tailwind'} progress={'65%'} width={'65%'} />
                <SkillsSection skill={'MUI'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Web Design'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'UI/Ux Design'} progress={'76%'} width={'76%'} />
                <SkillsSection skill={'Photoshop'} progress={'60%'} width={'60%'} />
            </div>

            <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web design'}
                    text={'There are many variations of passages of but the majority have suffered alteration in some form.'}
                />
                <ServicesSection image={html5} title={'PSD to HTML'}
                    text={'I will convert your PSD to HTML5 with Latest Bootstrap. It will fully responsive and Pixel perfect.'}
                />
                <ServicesSection image={gdesign} title={'Graphic Design'}
                    text={'I can design logo, banner, thumbnail for your project. I am very experienced and expert in this fiend.'}
                />
                <ServicesSection image={res} title={'Responsive Design'}
                    text={'I can design responsive webpages. It will be W3C validated, fresh, SEO optimized and hand coded.'}
                />
                <ServicesSection image={bug} title={'Bugs fixing'}
                    text={'I am expert in fixing bugs. if your website have also problem such like that you may knock me.​'}
                />


            </div>

        </div>
    )
}

export default AboutPage;
