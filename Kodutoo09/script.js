let uudised = [
    {
        pildiUrl: 'Uudis1.jpg',
        autor: 'Karl Kivil',
        kuupaev: '20.09.2022',
        pealkiri: 'Iraani meeleavaldused hoogustuvad',
        kirjeldus: 'Iraani politsei vahi all suri hiljuti noor naine, kes väidetavalt rikkus islamiriigi rangeid riietumisreegleid. Iraanis hoogustuvad nüüd meeleavaldused, politsei kasutab meeleavaldajate peal vägivalda.',
        viideUudisele: 'uudis1.html',
    },
    {
        pildiUrl: 'Uudis2.jpg',
        autor: 'Allan Aksiim',
        kuupaev: '19.09.2022',
        pealkiri: 'Soome uus LNG-terminal võtab esimesena vastu Vene gaasi',
        kirjeldus: 'Hamina linnas rajatakse praegu Soome esimest riikliku gaasivõrguga ühendatud veeldatud maagaasi (LNG) vastuvõtuterminali. LNG-tanker Vene maagaasiga saabus Haminasse sel esmaspäeval.',
        viideUudisele: 'uudis2.html',
    },
    {
        pildiUrl: 'uudis3.png',
        autor: 'Karl Kivil',
        kuupaev: '21.09.2022',
        pealkiri: 'Saksamaa valitsus riigistab Uniperi',
        kirjeldus: 'Uudisteagentuur Bloomberg teatas, et Saksamaa valitsus riigistab rahalistes raskustes energiafirma Uniperi.',
        viideUudisele: 'uudis3.html',
    },
];

let uudisedElement = document.querySelector('.flex');
for (let i = 0; 1 < uudised.length; i++) {
    let uudisElement = document.createElement('p');
    uudisElement.classList = ['container'];
    let pealkiriElement = document.createElement('h1');
    pealkiriElement.innerHTML = uudised[i].pealkiri;
    uudisElement.appendChild(pealkiriElement);
    let pildiElement = document.createElement('img');
    pildiElement.src = uudised[i].pildiUrl;
    uudisElement.appendChild(pildiElement);
    let autorElement = document.createElement('div');
    autorElement.innerHTML = uudised[i].autor;
    uudisElement.appendChild(autorElement);
    let kuupaevElement = document.createElement('div');
    kuupaevElement.innerHTML = uudised[i].kuupaev;
    uudisElement.appendChild(kuupaevElement);
    let kirjeldusElement = document.createElement('p');
    kirjeldusElement.innerHTML = uudised[i].kirjeldus;
    uudisElement.appendChild(kirjeldusElement);
    let viideUudiseleElement = document.createElement ('a');
    viideUudiseleElement.setAttribute('href', uudised[i].viideUudisele);
    viideUudiseleElement.innerHTML = 'Jätka lugemist';
    uudisElement.appendChild(viideUudiseleElement);

    uudisedElement.appendChild(uudisElement);
}