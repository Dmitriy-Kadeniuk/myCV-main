const currentDate = new Date()
const data = {
    age: '23',
    photoPath: 'img/my1.jpg',
    gender: 'male',
    name: {
        firstName: 'Dmitriy',
        lastName: 'Kadenyuk',
    },
    about: [
        `Hello, here's a bit of information about me. I've been working in the development field for 3 years now. I started as a frontend developer, then got acquainted with WordPress and worked with this technology for quite a long time, and I continue to work with it. Currently, I'm delving more into backend development, constantly evolving and exploring new technologies and opportunities in development. Apart from programming, I enjoy engaging in sports and playing various active games like football and volleyball. <br>`,

    ],
    phone: [
        '+380685359128',
    ],
    skills: [
        {
            name: 'HTML',
            experience: 3,
        },
        {
            name: 'CSS',
            experience: 3,
        },
        {
            name: 'javaScript',
            experience: 3,
        },
        {
            name: 'SASS/LESS/SCSS',
            experience: 3,
        },
        {
            name: 'Photoshop (Ps)',
            experience: 5,
        },
        {
            name: 'Figma',
            experience: 3,
        },
        {
            name: 'Laravel',
            experience: 0.6,
        },
        {
            name: 'Git',
            experience: 3,
        },
        {
            name: 'Wordpress',
            experience: 3,
        },
        {
            name: 'Jquery',
            experience: 3,
        },
        {
            name: 'Bootstrap 4/5',
            experience: 3,
        },
        {
            name: 'PHP',
            experience: 3,
        },
        {
            name: 'ACF',
            experience: 3,
        },
        {
            name: 'WPML',
            experience: 3,
        },
        {
            name: 'WooCommerce',
            experience: 3,
        },
        {
            name: 'MySQL',
            experience: 3,
        },
        {
            name: 'Elementor',
            experience: 3,
        },
        {
            name: 'JSON',
            experience: 3,
        },
        {
            name: 'Docker',
            experience: 1,
        },
    ],
    socials: [
        {
            iconClass: 'fab fa-linkedin',
            href: 'https://www.linkedin.com/in/dmitriy-kadeniuk-366284243/',
        },
        {
            iconClass: 'fab fa-facebook',
            href: 'https://www.facebook.com/profile.php?id=100084065657396',
        }
    ],
    position: [
        'PHP developer',
        'WordPress developer'
    ],
    education: {
        basic: [
            {
                name: `Kharkiv State Polytechnic College`,
                specialization: `Installation, maintenance, and repair of automated motion control systems in railway transportation`,
                qualification: `Electrician`,
                period: ['2016', '2020']
            },
            {
                name: `Ukrainian State University of Railway Transport`,
                specialization: `Information-Control Systems and Technologies`,
                qualification: `Engineer`,
                period: ['2020', '2023']
            },
            {
                name: `Ukrainian State University of Railway Transport`,
                specialization: `Automation, computer-integrated technologies and robotics`,
                qualification: `IT specialist`,
                period: ['2023', 'now']
            },
        ],
        additional: [
            {
                name: `Solo learn courses`,
                period: ['2020', '2021'],
                certification: 'Solo learn',
            },
            
        ],
    },
    languages: [
        {
            name: 'English',
            level: 'B1',
        },
        {
            name: 'Ukrainian',
            level: 'С2',
        },
        {
            name: 'Russian',
            level: 'С2',
        },
    ],
    interests: [
        'Football',
        'Developer trends',
        'Sport',
        'Programming',
        'Electronics',
    ],
    messengers: [
        {
            href: 'https://t.me/Amoterassu',
            iconClass: 'fab fa-telegram',
        },
        {
            href: `viber://chat?number=%2B+3800685359128`,
            iconClass: 'fab fa-viber',
        },
        {
            href: `https://wa.me/+3800685359128`,
            iconClass: 'fab fa-whatsapp',
        },
    ],
    experience: [
        {
            period: ['2021', '2022'],
            workNow: false,
            companyName: `'Freelance on UpWork`,
            position: `Front-end | WordPress Developer"`,
            description: `- Development of landing pages, online stores, and multi-page websites.<br>
            - Bug fixing and troubleshooting.<br>
            - WordPress development and customization.<br>
            - WooCommerce development and customization.<br>
            - Working with custom WordPress themes.<br>
            - Creating themes from scratch.<br>
            - Working with plugins like ACF, Contact Form 7, Polylang, Elementor,WPML.<br>
            - Creating animations using JS.<br>
            - Working with various WordPress plugins and creating custom solutions for WooCommerce.<br>`,
        },
        {
            period: ['01.2022', '04.2022'],
            workNow: false,
            companyName: `'Lion Internal`,
            position: `Front-end | WordPress Developer"`,
            description: `- Bug tracking and resolution on webpages.<br>
            - Configuration of the store's payment systems.<br>
            - Implementation of new logic on websites.<br>
            - Development of new webpages.<br>
            - Proficiency in WooCommerce.<br>
            - Expertise in WordPress and its plugins, including ACF and Contact Form 7.<br>`,
        },
        {
            period: ['04.2022', '08.2022'],
            workNow: false,
            companyName: `'DevOut Labs`,
            position: `Front-end | WordPress Developer"`,
            description: `-Development of a WordPress website, deploying it on a CMS using ACF Pro, Contact Form 7, and incorporating JS animations.<br>
            Ability to edit text fields and replace images.<br>
            Customizable menu that can be modified in the admin panel.<br>`,
        },
        {
            period: ['09.2022', '02.2023'],
            workNow: false,
            companyName: `'Onix Systems`,
            position: `Front-end | WordPress Developer"`,
            description: `
            - Development of landing pages, online stores, and multi-page websites.<br>
            - Bug fixing and troubleshooting.<br>
            - WordPress development and customization.<br>
            - WooCommerce development and customization.<br>
            - Working with custom WordPress themes.<br>
            - Creating themes from scratch.<br>
            - Working with plugins like ACF, Contact Form 7, Polylang, Elementor,WPML.<br>
            - Creating animations using JS.<br>
            - Enhancement of plugin functionality.<br>
            - Working with various WordPress plugins and creating custom solutions for WooCommerce.<br>`,
        },
        {
            period: ['02.2023', 'now'],
            workNow: false,
            companyName: `Remote Helpers"`,
            position: `Front-end | WordPress Developer`,
            description: `- Development of landing pages, online stores, and multi-page websites.<br>
            - Bug fixing and troubleshooting.<br>
            - WordPress development and customization.<br>
            - WooCommerce development and customization.<br>
            - Working with custom WordPress themes.<br>
            - Creating themes from scratch.<br>
            - Working with plugins like ACF, Contact Form 7, Polylang, Elementor,WPML.<br>
            - Creating animations using JS.<br>
            - Working with various WordPress plugins and creating custom solutions for WooCommerce.<br>`,
        },
        
    ],
    work:[
        {
            nameWork: 'HipuiKir',
            imageWork: 'img/hipuikir.jpg',
            linkWork: 'https://www.hipuikir.com/',
        },
        {
            nameWork: 'Maxim Cable',
            imageWork: 'img/maximcable.jpg',
            linkWork: 'https://maximmcable.com/',
        },
        {
            nameWork: 'Remote Helpers',
            imageWork: 'img/rhs.jpg',
            linkWork: 'https://rhelpers.com/',
        },
        {
            nameWork: 'Nutrion by Tanya',
            imageWork: 'img/nutrion.jpg',
            linkWork: 'https://nutritionbytanya.com/',
        },
        {
            nameWork: 'Nibulon',
            imageWork: 'img/nibulon.jpg',
            linkWork: 'https://www.nibulon.com/',
        },
    ],




    makeMyStory() {
        return this.about ? `<h2>My short story</h2> <p>${this.about.map(item => `${item} `).join(' ')}</p>` : '';
    },
    makeContacts() {
        return this.messengers.map
        (item => `<a href="${item.href}"><i class="${item.iconClass}"></i></a>`).join('');
    },
    makeSocialLinks() {
        return this.socials.map
        (item => `<a href="${item.href}"><i class="${item.iconClass}"></i></a>`).join('');
    },
    makeLanguages() {
        return this.languages.map
        (item => `<span class="lang-item">${item.name}<s>${item.level}</s></span>`).join('');
    },
    makeSkills() {
        return this.skills.map
        (item => `<span class="skill-item">${item.name}<s>${item.experience.toString()}</s></span>`).join('');
    },
    makeInterests() {
        return this.interests.map
        (item => `<span class="hobby-item">${item}</span>`).join('');
    },
    makeWorkExperience() {
        let experienceItems = '';
        let sortedItems = this.experience.sort(function (a, b) {
            if (a.period[1] < b.period[1]) {
                return 1;
            }
            if (a.period[1] > b.period[1]) {
                return -1;
            }
        });
        sortedItems.forEach(item => {
            experienceItems += `<h4>${item.companyName} <span>${item.period[0]} - ${item.workNow === true ? 'now' : item.period[1]}</span></h4>
                                <h5>${item.position}</h5>
                                <p>${item.description}</p>`
        })
        return experienceItems;

    },
    makeEducation() {
        let eduRow = `<h3>Basic</h3>`;
        let sortedItems = this.education.basic.sort(function (a, b) {
            if (a.period[1] < b.period[1]) {
                return 1;
            }
            if (a.period[1] > b.period[1]) {
                return -1;
            }
        });
        sortedItems.forEach(item => {
            eduRow +=
                `<div class="eduItem">
                    <h4>${item.name}<span>${item.period[0]} - ${item.period[1]}</span></h4>
                    <h5><span>Certification:</span> ${item.qualification}</h5>
                </div>`
        })

        let additional = `${this.education.additional
            ? `<h3>Additional</h3> ${this.education.additional.map(item =>
                `<div class="eduItem">
                    <h4>${item.name} <span>${item.period[0]} - ${item.period[1]}</span></h4>
                    <h5><span>Certification:</span> ${item.certification}</h5>
                </div>`).join('')}`
            : ``
        }`
        eduRow += additional;
        return eduRow;
    },

    makeWork(){
  
    let myWork = document.querySelector('.myWork');

    myWork.innerHTML = this.work.map(function(item) {
            return `<a href="${item.linkWork}">
                        <div class="single_work_block">
                        <h3>${item.nameWork}</h3>
                        <img src="${item.imageWork}">
                        </div>
                    </a>`;
        }).join('');
    },
}


