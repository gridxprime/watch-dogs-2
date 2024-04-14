function goNextPage() {
    let closeNotification = document.querySelector('.first__window')
    let openSecondWindow = document.querySelector('.second__window')
    closeNotification.style.display = "none";
    openSecondWindow.style.display = "flex";
}

function getBack() {
    let closeNotification = document.querySelector('.first__window')
    let openSecondWindow = document.querySelector('.second__window')
    closeNotification.style.display = "flex";
    openSecondWindow.style.display = "none";
}


function wrenchInfo() {
    let closeSecondWindow = document.querySelector('.second__window')
    let openCharecterInfo = document.querySelector('.third__window')
    let openWrenchInfo = document.querySelector('.wrench')
    let getButtonGetBack = document.querySelector('.get__back-info')
    closeSecondWindow.style.display = "none"
    openCharecterInfo.style.display = "flex"
    openWrenchInfo.style.display = "flex"
    getButtonGetBack.style.display = "flex"
 }

function marcusInfo() {
    let closeSecondWindow = document.querySelector('.second__window')
    let openCharecterInfo = document.querySelector('.third__window')
    let openMarcusInfo = document.querySelector('.marcus')
    let getButtonGetBack = document.querySelector('.get__back-info')
    closeSecondWindow.style.display = "none"
    openCharecterInfo.style.display = "flex"
   openMarcusInfo.style.display = "flex"
   getButtonGetBack.style.display = "flex"
}

function sitaraInfo() {
    let closeSecondWindow = document.querySelector('.second__window')
    let openCharecterInfo = document.querySelector('.third__window')
    let openSitaraInfo = document.querySelector('.sitara')
    let getButtonGetBack = document.querySelector('.get__back-info')
    closeSecondWindow.style.display = "none"
    openCharecterInfo.style.display = "flex"
    openSitaraInfo.style.display = "flex"
    getButtonGetBack.style.display = "flex"
}


function getBackFromCharecterInfo(){
    let closeButton = document.querySelector('.get__back-info')
    let closeThirdWindow = document.querySelector('.third__window')
    let openSecondWindow = document.querySelector('.second__window')
    let closeSitaraInfo = document.querySelector('.sitara')
    let closeMarcusInfo = document.querySelector('.marcus')
    let closeWrenchInfo = document.querySelector('.wrench')
    let closeGalleryWrench = document.querySelector('.wrench__gallery')
    let closeGalleryMarcus = document.querySelector('.marcus__gallery')
    let closeGallerySitara = document.querySelector('.sitara__gallery')
    closeThirdWindow.style.display = "none"
    closeButton.style.display = "none"
    openSecondWindow.style.display = "flex";
    closeSitaraInfo.style.display = "none"
    closeMarcusInfo.style.display = "none"
    closeWrenchInfo.style.display = "none"
    closeGalleryWrench.style.display = "none"
    closeGalleryMarcus.style.display = "none"
    closeGallerySitara.style.display = "none"
}


function openGalleryWrench() {
    let closeThirdWindow = document.querySelector('.third__window')
    let closeWrenchSkills = document.querySelector('.wrench')
    let openGalleryWrench = document.querySelector('.wrench__gallery')
    closeThirdWindow.style.display = "none"
    closeWrenchSkills.style.display = "none"
    openGalleryWrench.style.display = "flex"
}

function openGalleryMarcus() {
    let closeThirdWindow = document.querySelector('.third__window')
    let closeWrenchSkills = document.querySelector('.wrench')
    let openGalleryMarcus = document.querySelector('.marcus__gallery')
    closeThirdWindow.style.display = "none"
    closeWrenchSkills.style.display = "none"
    openGalleryMarcus.style.display = "flex"
}

function openGallerySitara() {
    let closeThirdWindow = document.querySelector('.third__window')
    let closeWrenchSkills = document.querySelector('.wrench')
    let openGallerySitara = document.querySelector('.sitara__gallery')
    closeThirdWindow.style.display = "none"
    closeWrenchSkills.style.display = "none"
    openGallerySitara.style.display = "flex"
}

