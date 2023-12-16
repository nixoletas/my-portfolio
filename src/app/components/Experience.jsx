import React from 'react'

const Experience = () => {
  return (
    <section className='w-full h-full flex justify-center mb-12'>
        <div className='container flex flex-row max-w-3xl h-full justify-start mx-4'>
            <div className='whitestripe flex w-1 h-auto bg-purple-600 rounded-full'></div>
            <div className='w-full mx-4'>
                <h1 className='text-4xl mb-12'>Experience</h1>

                <div id="experience_1" className='my-12'>
                <h1 className='text-2xl mb-2 text-purple-300'>
                    Systems Platoon Commander
                </h1>
                <span className='flex font-sourcecode my-2'>jun 2023 - moment</span>
                <p className='text-justify text-lg'>As the Systems Platoon Commander, I worked together with the team in managing and maintaining the Brazilian Army&apos;s Command and Control systems. I also developed web applications in React.js to improve and facilitate navigation between various different systems.</p>
                </div>

                <div className='w-1 h-24 mx-12 bg-purple-400 flex justify-center rounded-full'></div>

                <div id="experience_2" className='my-12'>
                <h1 className='text-2xl mb-2 text-purple-300'>
                Head of Information Technology
                </h1>
                <span className='flex font-sourcecode my-2'>jan 2023 - may 2023</span>
                <p className='text-justify text-lg'>Still in 9th Batallion, I headed the Information Technology Section. With the team, I was able to see how the Scrum methodology works in practice. We worked on several System Management and Cybersecurity tools such as Proxmox, Graylog, PfSense, Security Onion, among others. We also worked with several SysAdmin and Cybersecurity tools such as Proxmox, Graylog, PfSense, Security Onion, among others.</p>
                </div>

                <div className='w-1 h-24 mx-12 bg-purple-400 flex justify-center rounded-full'></div>

                <div id="experience_3" className='my-12'>
                <h1 className='text-2xl mb-2 text-purple-300'>
                    Head of Justice and Law Section
                </h1>
                <span className='flex font-sourcecode my-2'>july 2020 - dec 2022</span>
                <p className='text-justify text-lg'>As head of the Justice and Discipline Section of the 9th Communications and Electronic Warfare Battalion, I was responsible for administering, managing and resolving all administrative processes related to the Battalion. Managed the investigation scale, administrative processes, documents verifying the validity and veracity of documents, and processes mapping.</p>
                </div>

                <div className='w-1 h-24 mx-12 bg-purple-400 flex justify-center rounded-full'></div>

                <div id="experience_4" className='my-12'>
                <h1 className='text-2xl mb-2 text-purple-300'>
                Head of Communications Section
                </h1>
                <span className='flex font-sourcecode my-2'>july 2019 - jun 2020</span>
                <p className='text-justify text-lg'>At the Administration and Support Base of the Western Military Command, I was in charge of the Communications Section, responsible for the availability and operability of all Motorola APX 2000 radios for the internal services at Fort Pantanal. I also worked on training reservists, giving instructions on a wide range of topics related to army activities for soldiers.</p>
                </div>

                <div className='w-1 h-24 mx-12 bg-purple-400 flex justify-center rounded-full'></div>

                <div id="experience_5" className='my-12'>
                <h1 className='text-2xl mb-2 text-purple-300'>
                    Commander of Communications Platoon
                </h1>
                <span className='flex font-sourcecode my-2'>july 2018 - jun 2019</span>
                <p className='text-justify text-lg'>As Commander of the Communications Platoon of the 20th Armored Cavalry Regiment, Campo Grande, MS, I was developing leadership and teamwork attributes to carry out the daily and major missions carried out within the regiment. In the platoon, we worked providing the link and maintenance of infoways spread throughout the Midwest, we also had Motorola and Harris radio equipment and carried out the maintenance and configuration of this equipment.</p>
                </div>


            </div>
        </div>
    </section>
  )
}

export default Experience