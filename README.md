# mdl-color-picker
A quick and easy util for pulling the classnames and hex values for the colour palette provided by Google's Material Design Lite project

## usage
Importing is dead easy;
```
import {colors, weights, getHex, getTextClass, getColorClass} from 'mdl-color-picker';
```
getting the hex value of the color is just as easy:
```
let myColor = getHex(colors.red, weights.W300);
```
using it in react to apply the class name is simples:
```
let myJsxSpan = <span 
    className={getTextClass(colors.red, weights.W300)}
>
    This text should be red
</span>
```
and for a background color:
```
let myJsxDiv = <div 
    className={getColorClass(colors.red, weights.W300)}
>
    This text should be on a red background
</div>
```
## exceptions
not every color supports the'Axxx'  weights so you'll get a warning thrown if you use them when the color weight doesn't exist.

## weight notation
so the mdl colors go 50, 100, 200 etc up to 900, then some of them have 'Axxx' weights (presumably for alpha channel variance??)

as you can't have an object key start with a number, I opted to have a 'W' for weight in front of the number; my 'W500' color weight maps directly to '500' in mdl speak, eg red+W300 is mdl's mdl-color--red-300 value. 

## unweighted colors
all colors have an option to be used without weight. e.g. you can use the following;
```
let myColor = getHex(colors.red);
```
to get a full red color. all colors support this.

there are 2 special colors; `colors.black` and `colors.white` which support **no weights**. these can only referenced without a weight. use `colors.grey` or `colors.blueGrey` for that.