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
    } else {
        hinnangElement.innerHTML = 'Küll sul on suurepärane pikk nimi';
    }
}
