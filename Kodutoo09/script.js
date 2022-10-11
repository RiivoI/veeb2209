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
    {
        pildiUrl: 'https://assets.justinmind.com/wp-content/webp-express/webp-images/uploads/2018/11/Lorem-Ipsum-alternatives-1024x655.png.webp',
        autor: 'Mart Tamm',
        kuupaev: '11.10.2022',
        pealkiri: 'Loren Ipsun',
        kirjeldus: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        viideUudisele: 'uudis4.html',
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
    let autorKuupaevElement = document.createElement('div');
    autorKuupaevElement.classList = ['autor-kuupaev'];
    uudisElement.appendChild(autorKuupaevElement);
    let autorElement = document.createElement('div');
    autorElement.innerHTML = uudised[i].autor;
    autorKuupaevElement.appendChild(autorElement);
    let kuupaevElement = document.createElement('div');
    kuupaevElement.innerHTML = uudised[i].kuupaev;
    autorKuupaevElement.appendChild(kuupaevElement);
    let kirjeldusElement = document.createElement('p');
    kirjeldusElement.innerHTML = uudised[i].kirjeldus;
    uudisElement.appendChild(kirjeldusElement);
    let viideUudiseleElement = document.createElement ('a');
    viideUudiseleElement.setAttribute('href', uudised[i].viideUudisele);
    viideUudiseleElement.innerHTML = 'Jätka lugemist';
    uudisElement.appendChild(viideUudiseleElement);

    uudisedElement.appendChild(uudisElement);
}