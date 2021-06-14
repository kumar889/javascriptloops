var startNumber = prompt('Enter a starting number :');
var breakNumber = prompt('Enter a breaking number :')

for (let i=startNumber; i<=999; i++){
    if (i>breakNumber){  
        break;
    }
    document.write(i);
}
