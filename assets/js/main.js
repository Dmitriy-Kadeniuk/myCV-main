window.addEventListener('DOMContentLoaded', () => {

    /*catch general sections*/
    const
        d = document,
        main = d.querySelector('main'),
        aside = d.querySelector('aside'),
        header = d.querySelector('header'),
        footer = d.querySelector('footer');
    data.makeWork();

    /*Aside*/
    aside.querySelector('.main_language')
        .insertAdjacentHTML('beforeend', `<div class="lang-tags">${data.makeLanguages()}</div>`)
    aside.querySelector('.skill-tags')
        .insertAdjacentHTML('afterbegin', `${data.makeSkills()}`);
    aside.querySelector('.hobby-tags')
        .insertAdjacentHTML('beforeend', `${data.makeInterests()}`);
    aside.querySelector('.main_social')
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

    main.querySelector('.education .accordion-item-description .job-items')
        .insertAdjacentHTML('beforeend', `${data.makeEducation()}`);



    const pdfButtons = document.querySelectorAll('.pdf_button');

    pdfButtons.forEach(button => {
        button.addEventListener('click', () => {
            const pdfUrl = 'assets/dmitriy-kadeniuk_github.pdf'; // Проверьте путь!

            const downloadLink = document.createElement('a');
            downloadLink.href = pdfUrl;
            downloadLink.download = 'dmitriy_kadenyuk_cv.pdf';

            document.body.appendChild(downloadLink);
            downloadLink.click();

            setTimeout(() => {
                document.body.removeChild(downloadLink);
            }, 100);
        });
    });


    /*Footer*/
    footer.querySelector('.socials')
        .insertAdjacentHTML('afterbegin', `${data.makeSocialLinks()}`);
});