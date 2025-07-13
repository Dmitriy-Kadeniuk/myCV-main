const currentDate = new Date()
const data = {
    age: '24',
    photoPath: 'assets/img/my1.jpg',
    gender: 'male',
    name: {
        firstName: 'Dmitriy',
        lastName: 'Kadenyuk',
    },
    about: [
        `Hello, thank you for your attention!<br>
My name is Dmitriy, and I am a PHP/WordPress developer. I primarily specialize in backend development but also have solid experience working with the frontend part of websites.<br>

I have around 5 years of commercial experience during which I have been involved in:<br>

1.Developing and customizing WordPress websites using custom themes and popular plugins such as ACF, Contact Form 7, Polylang, and Elementor.<br>

2.Creating tailored WooCommerce solutions for specific business needs.<br>

3.Efficient bug fixing and functionality debugging.<br>

4.Implementing animations and interactive elements using JavaScript to enhance visual appeal and user engagement.<br>

5.Continuously updating my knowledge and staying current with the latest trends in web development.<br>

6.Effective communication with clients and team members.<br>

7.Improving website cybersecurity.<br>

I offer services for both landing pages and multi-page websites.<br>`,

    ],
    phone: [
        '+380685359128',
    ],
    skills: [
        {
            name: 'HTML',
            experience: 5,
        },
        {
            name: 'CSS',
            experience: 5,
        },
        {
            name: 'javaScript',
            experience: 5,
        },
        {
            name: 'SASS/LESS/SCSS',
            experience: 5,
        },
        {
            name: 'Photoshop (Ps)',
            experience: 5,
        },
        {
            name: 'Figma',
            experience: 5,
        },
        {
            name: 'Laravel',
            experience: 0.6,
        },
        {
            name: 'Git',
            experience: 5,
        },
        {
            name: 'Wordpress',
            experience: 5,
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
            experience: 5,
        },
        {
            name: 'ACF',
            experience: 5,
        },
        {
            name: 'WPML',
            experience: 5,
        },
        {
            name: 'WooCommerce',
            experience: 5,
        },
        {
            name: 'MySQL',
            experience: 5,
        },
        {
            name: 'Elementor',
            experience: 5,
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
                period: ['2023', '2025']
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
            iconClass: 'fab fa-linkedin',
        },
    ],
    experience: [
        {
            period: ['08.2024', 'now'],
            workNow: true,
            companyName: `OutSoft`,
            position: `Front-end | PHP | WordPress Developer`,
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
            period: ['02.2023', '08.2024'],
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
            period: ['04.2022', '08.2022'],
            workNow: false,
            companyName: `'DevOut Labs`,
            position: `Front-end | WordPress Developer"`,
            description: `-Development of a WordPress website, deploying it on a CMS using ACF Pro, Contact Form 7, and incorporating JS animations.<br>
        Ability to edit text fields and replace images.<br>
        Customizable menu that can be modified in the admin panel.<br>`,
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
    ],
    work: [
        {
            nameWork: 'HipuiKir',
            imageWork: 'assets/img/hipuikir.jpg',
            linkWork: 'https://www.hipuikir.com/',
        },
        {
            nameWork: 'Maxim Cable',
            imageWork: 'assets/img/maximcable.jpg',
            linkWork: 'https://maximmcable.com/',
        },
        {
            nameWork: 'Remote Helpers',
            imageWork: 'assets/img/rhs.jpg',
            linkWork: 'https://rhelpers.com/',
        },
        {
            nameWork: 'Nutrion by Tanya',
            imageWork: 'assets/img/nutrion.jpg',
            linkWork: 'https://nutritionbytanya.com/',
        },
        {
            nameWork: 'Nibulon',
            imageWork: 'assets/img/nibulon.jpg',
            linkWork: 'https://www.nibulon.com/',
        },
        {
            nameWork: 'Nl life',
            imageWork: 'assets/img/nl_life.jpg',
            linkWork: 'https://nl.life/',
        },
        {
            nameWork: 'XYZ Business',
            imageWork: 'assets/img/xyz.jpg',
            linkWork: 'https://xyzbusiness-services.com/',
        },
        {
            nameWork: 'OutSoft',
            imageWork: 'assets/img/outsoft.jpg',
            linkWork: 'https://outsoft.eu/',
        },
    ],




    makeMyStory() {
        return this.about ? ` <p>${this.about.map(item => `${item} `).join(' ')}</p>` : '';
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
            (item => `<span class="lang-item anim-item"><span>${item.name}<s>${item.level}</s></span></span>`).join('');
    },
    makeSkills() {
        return this.skills.map
            (item => `<span class="skill-item anim-item"><span>${item.name}<s>${item.experience.toString()}</s></span></span>`).join('');
    },
    makeInterests() {
        return this.interests.map
            (item => `<span class="hobby-item anim-item"><span>${item}</span></span>`).join('');
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

    makeWork() {

        let myWork = document.querySelector('.myWork');

        myWork.innerHTML = this.work.map(function (item) {
            return `<a href="${item.linkWork}">
                        <div class="single_work_block">
                        <h3>${item.nameWork}</h3>
                        <img src="${item.imageWork}">
                        </div>
                    </a>`;
        }).join('');
    },
}


