let nuppElement = document.getElementById('nupp');
let nimiElement = document.getElementById('nimi');
let hinnangElement = document.getElementById('hinnang');

nuppElement.addEventListener('click', hindaNime);

function hindaNime() {
    let nimePikkus = nimiElement.value.length;
    if (nimePikkus == 0) {
        hinnangElement.innerHTML = '';
        return;
    }
    if (nimePikkus < 6) {
        hinnangElement.innerHTML = 'Küll sul on ilus lühike nimi';
        hinnangElement.style.backgroundColor = '#c4c4c4';
        hinnangElement.style.fontSize = '24px';
        return;
    } else {
        hinnangElement.innerHTML = 'Küll sul on suurepärane pikk nimi';
        hinnangElement.style.backgroundColor = '#a5f99e';
        hinnangElement.style.fontSize = '48px';
    }
}
