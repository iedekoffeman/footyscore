- npm packages fontawesome

1. Position fixed voor de header omdat ik wil dat hij in beeld blijft. fixed will not occupy any space in the body so the next element will be behind the fixed elemend, sticky position occupies the space, so the next element will not be hidden behind it. 
2. flexbox omdat het een one dimensional layout is en geen ingewikkelde. Dus kom je hier prima mee uit de voeten.
3. fontawesome gebruikt voor icons, +keuze voor individueel gebruik over global omdat bij global ook onnodige icons geimplementeerd worden en dat kan de performance naar beneden halen, bovendien gebruikt de app momenteel niet veel icons
4. Header buiten de grid geplaatst omdat ik hem sticky wilde hebben.
5. voor nu staan de asides hidden, maar daar wil ik nog iets mee in de toekomst.
6. z-index van 10000 voor de sticky header.
   Based on the natural order of things, headers typically have a lower z-index than almost every other element on a page, because they appear at the very top. So when you have a header fixed to the top of a viewport scrolling past items with higher z-indexes, everything else on the page is going to overlap the header, which isn’t exactly the look we’re going for. This can be easily fixed with z-index. When using z-index for this purpose, I like to assign the header a super high z-index, just to be safe. See below for a code snippet on how to implement this effect:
   7. Ik gebruik classnames bij het weergeven van de wedstrijden omdat classnames op meerdere 
 