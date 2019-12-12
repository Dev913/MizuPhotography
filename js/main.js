function MoreInformation() {
    alert('The shown images are NOT ours. However, we did obtain them legally from Pexels.com!')
}
function OnProceed() {
    var name = document.getElementById('name').value;
    var subject = document.getElementById('subject').value;
    var body = document.getElementById('body').value;
    window.open('mailto:dev913.info.contact@gmail.com?subject=' + subject + '&body=' + body + ' - Potential Client: ' + name)
}
function Onload() {
    alert('Hello, the person whom is typing this is Dev913s ' +
        'owner and founder. We are a multi-service company this is ' +
        'only for our potential clients whom are interested in our web design service. ' +
        'The rest of the website will load on detection of click on such button "OK"')
}