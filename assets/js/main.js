window.addEventListener('DOMContentLoaded', () => {

    /*catch general sections*/
    const
        d = document,
        main = d.querySelector('main'),
        aside = d.querySelector('aside'),
        header = d.querySelector('header'),
        footer = d.querySelector('footer');
    data.makeWork();

    /*Header*/
    header.querySelector('.head-name')
        .insertAdjacentHTML("afterbegin", `${data.name.firstName} ${data.name.lastName}`)
    header.querySelector('.g-info')
        .insertAdjacentHTML('beforeend', `<h4>${data.position.map(item => `<span>${item}</span>`).join('•')}</h4>`);

    /*Aside*/
    /*make header padding*/
    aside.style.paddingTop = main.style.paddingTop = `${header.offsetHeight / 16}rem`;

    aside.querySelector('.photo')
        .insertAdjacentHTML('afterbegin', `<img src="${data.photoPath}" alt="myPhoto">`);
    aside.querySelector('.lang_section')
        .insertAdjacentHTML('beforeend', `<div class="lang-tags">${data.makeLanguages()}</div>`)
    aside.querySelector('.skill-tags')
        .insertAdjacentHTML('afterbegin', `${data.makeSkills()}`);
    aside.querySelector('.hobby-tags')
        .insertAdjacentHTML('beforeend', `${data.makeInterests()}`);
    aside.querySelector('.contact-items')
        .insertAdjacentHTML('afterbegin', `${data.makeContacts()}`);

    /*Main*/
    main.querySelector('.myStory .accordion-item-description')
        .insertAdjacentHTML('beforeend', `${data.makeMyStory()}`);
    const experienceContainer = main.querySelector('.job-items');
    experienceContainer.innerHTML = '';

    data.experience.forEach((job) => {
        const jobHTML = `
    <div class="job-item">
      <h4>${job.companyName} <span>${job.period.join(' - ')}</span></h4>
      <h5>${job.position}</h5>
      <p>${job.description}</p>
    </div>
  `;
        experienceContainer.insertAdjacentHTML('beforeend', jobHTML);
    });
    main.querySelector('.education .accordion-item-description')
        .insertAdjacentHTML('beforeend', `${data.makeEducation()}`);

    PdfButton = document.querySelector('.pdf_button');
    PdfButton.addEventListener('click', () => {
        window.print();
    });


    /*Footer*/
    footer.querySelector('.socials')
        .insertAdjacentHTML('afterbegin', `${data.makeSocialLinks()}`);
});