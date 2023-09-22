import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const img1 = "https://th.bing.com/th/id/OIP.HWx8bzBIkv0YB41aWVIlmwHaFj?w=192&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
const img2 = "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1676622415_1048633.jpg?format=webp&w=480&dpr=1.3";
const img3 = "https://blackberrys.com/cdn/shop/files/Polo_T_Shirt_In_White_Kuro-ETCC2626W1MA23FK-image1.jpg?v=1694437255";
const img4 = "https://th.bing.com/th?q=Red+Jeans&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247";
const img5 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAECALYDASIAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAAAAEEBgIDBQf/xABAEAACAQMCAwcBBQUGBQUAAAABAgMABBESIQUxQQYTIlFhcYEUIzJCkaFSYnKx8CQzgsHR4QdzkrLCFRZEoqP/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAJREBAAICAQQCAgMBAAAAAAAAAAECAxExBBIhQQUTIjJRYXEU/9oADAMBAAIRAxEAPwD1DfJ3PM9ae+25o6n3ooE2Skgyd45B+amvNLYZLLk4BI59K9OGMjPLkfavMXR7O7ubd9mimkjP+FiM1wdbG6xL1fjZ/K0IPFrMqFnRijxsjo+fuupDKT7HFdft1xe3vOzvAoNX2vFnivJo1bYRwRkMrY3++Rj+E+VabqI3drNGCPEjKCehI2NUOVri4fEznXABb6WJ+zEZI0jPTOT8+tafGfnaaz6ZfLx2Vi0e2iMSRf3aqAABjJOQPU1sGiQgqNMo30E7H0FGiRCDrU4/eFbCkUoBBUOBvgjnX0UR6fLWksKSeeCdweh6gigQlCJYH0sDup+6fQ1mMlX1ZEkYzldyy+o64poVJ/CVcdOR9RVoUbbM/wBnCnbQ8y4zyGosB+tbs1psogPqoy6jTI0g1HGVZFON+vOtoIJxtnyq1eNKXjzswTvv7U8Ab536mlg9dhSJ6DFWZtqtzHMEj/St1rI7X1ipY6FEgjBOw8RY4/PNRlOMelbLQ6r6xweUkoP/AErXD18b6ez0/jZ11NIh6TaZECn0qVwXL39++TiO3jQ+8khP/jUONilsmeemun2fjItrm4I3ubhtH/Li+zH66q+V6avdlj+n1/V27cNv78O1v5n86N/M0UV7bwBvS+T+dZUqBDOaKa8/iigx6n3ooPM+9FAVUu1fDjmPicS7HTDdY6EbJIffkfYedW2sZI45UkilRXjkUo6MMhlPMGs8lIvXtlrhyTivFoeaWsxJ0Y9/auFLwG9veP3dpaCJxeWU1/BHIwQyywlFkhjc+ENvqGdvUZyLRxbhb8LuvBqNtLlrdzzx1Rj5j/frWESzLc8L4lbIzzcOuBOEXGuSIq0csSk7ZZSR748q83Da3TZos9rPWvV4JiHnkllH4yrlSjsjq3NWVtJVgeoOxrEW0A8JdPRkYBgfJhUGOa5ilnLZScyOZ45lIOsklhIjb8/SuhCbS9XU0SrIvhdeoIHQjfFfU0tF3xeSlqf4NF5AVZW75F38zjrvWLHu2EsO8UhyUbYB+qnyPlQ9oEY/TrMp80nMfTqNLD9amWfDuKXSytFodQpMguHUoQBqxqVQ526hTVrT2x5UrHdwwtZo3mcKxy8Q1Iww6lD16EbmpEhjG7HHkw6H1rVJ2e4xFKjKsCFwUjSSWTxFtJwjGMZ5j86yg4ZxV5XhjmsXkVtEkYldlyP3ioXz69KiuavtNsM8wO9hOAzrk9c4BrLSMZ9Nj0/MVEeyZmkSWQB42ZZERSMaW05Uk7jyNbba3SFtQCnYjVuWI+a2i22FqxDZmQA92upzsn7Iz+JjywK6PDLWJb3ghUuzy2l3LIWPhLfXTQAqOmRHURnYfdGSCDj3rsdj7Jrq7vuIldMCv3cIx4XYffZfnPzXnfJ31gmP5er8RTfURM+lvue8Iht4t5HKRJ6vIQoq2W8EdtBBbx/chjSNfXSMZ+edVzhkX1HFS53S1R5v8bfZr/Mn4q0V4/RU1E3/AJe31+TdopHoU6KK73miiiiga8/iihefxRQazzPvRQeZ96KAoopUEXiFlHxC0mtmA1sC0LH8MoB0n/I+9UqxlMEhRsghtJB9Dyq/1UO0Vmba6S7iXEV0SzgA4WZd2/Pn+dcfVY917oeh0WXtt2T7abmLhtzIHuLK1nfAUGaGORtJ6ZZSarnGOyUaRS8W4FGsbxKzXVkrExSx43khBOQV5sM4xnGCMN147qBHjlnmSNVI194wH6c/0qPL2mituKRyW8brwqZNE0jrhkuM7TaMnCHkfz2rm6a2Ws91N+HT1dcNo7L63Kq2lrHLaxy3YZpZp3VbaM4TuYwctqzkknp+hru26cOjjSMRwpKqxAjBQ7DxAbDn7/z2mcV4REiR39opFnLIUeNWfTDM/jPdDOytjkNtvy5hjQgEswY7gn+de9jv91Ytt85lx/Teaa4F1NCiE9zLGEkjRpoWH2Mc6tbtJhdQ8OrVuRyxvUaa9sUzDHZ2/dRsY9SIEDTAZaQ8yM+QYDYfKna5Sz4nHHNp1W0pOVL5AXUQCu/TyrZIkD2vDyUJM0jO+SVUlYEYfd3xuce/pVppG/KtbeHN4lDZXA+osIWhmjyzNEVwwxkpu2TjptUdpvppRDdELrQywyjeOWPc5B5Z9P8AWrEsMZVRhNBUHTHsijyAqbw/hq38wR7YS2kDQmcuuoF4/FHDv+EbEjluKm2X6Y7/AEUw/fb69eWXCuy6S2kV1xJHaS4RXEIkaMRIw8I+zIOojnv6dN7Nbw29pAY4ESKOJAqRxqFRFUYAAFc5+0dst9KpWV7SHTFEYVzrf8chydx0H+9ZzcV4dIswhnGZcNiRWjITHXUAK8Dqpz5J7r7mH0XSf8+KOykxEu5wGPw39xjaWZEQnqI1yf1NduonD4hDY2SAY+xR23zl3Gtjt6mpdd2GnZSIefnv35JsdFFFasRRRRmga8/iiheZ9qKDUeZ96KDzPvRRIooooCuT2jhWfgvEUJYMohkjZSQUdZVAII36kfNdaoPGFDcK4pz8NsZNuf2bK/8AlRE8PIu6jBIZyCrNgnU7nJycFjU+2FqwCvGzncHJbDZ8xyrVcxBZJNKoFzlWzthtwQfKkkjqNQdeobG5rqj+nFaZ9ujGsaRLAqXP06PqjhaeYwodx9mjNpHPbArNkTST3DrpycnV15dKid5qwe8bS2/Lqd63JKBzlb9knH+9TEa4Vm025RJ5FjE3hYFoZ1IzgnMZ5E1C+sh+ksYe5R2iCMrPg7yWyoeXqBUi8lQganDEc8gg+RxiuK+pO4xjCovPyAC74NXnXiZTWN+FitJFMKExxLjUPBgLufLH+dSo+8hFysTzol1gXUUU7rFMVAUF1DYzj2rkW8ndgK2ACM4XkMnO29dRGgKcn5kbDOc8txVZrEx5R3TW0zAEKBji3z1wNzv5YNSYkhZcOrIygEMyahnf9r/WtMWnUvjcbDJ0PgEewNdCGRRpJk5q2oNqUY8+VRJC/WxDW1qQcgwQkHAGQUHQVuqNYyJLZ2jqysO5RCU+6GQaGAz5EVKrkd0cCiigYokU+lG1FALz+KKa86KDSeZo8qR5n3pipBRRR5VCRWi9jM1lxCIbmS0uUA8yY2xW+mDgqfUZ9qIePTsr6QqqdIKnLYqIruGIPdqhwCMEmulxa3a1ubqF3A7q4ni6BiFchT+WK5WFyCFY78ydj0rqq45hPt9QDq0h0gnAVAOe3NqJrYhCyTzA77HRp+cCsIGfBGUX+I5NSh3bFRJOzA7aIwSffw1dmrt938MqpOWGrxIfDhlPlisDIAqgnmGIyNzuGGMV3L60t5ou6YBVOcSORrRh1VRv+tVILJLIiK8ivECpCfi8R3ydsbeVUs1pLr24uJFGEYDqzA4/M9KnI5jUd5dW8ZX9qRAcjpgkVzYIGBBkDNnGe8k1DPLyxXStrSM5AjRCT+A6f+wA1p5ZzynW95bczdRZTTnQxbOR+7mujHdIUykpL6hpAVguDzzkA1HgtIFyGXLEdWkbl5ZNbhFFlh3abDbA69N6pKV07OXSzW0sBYl4GDcseF/L5H613KpHZy5EXEI0LNpnVoSGxsTuu49R+tXaue8al1Y53U6YpU6o0OlRRQNedFC86KDQeZoFHnRUh0UUVAdLFFFBQO2Fv3fEu8CoVu7eKbxAffTML4/IfnVcSE4HgTGM7nyFXrtpba7Gzuhzt5pIm2/BMuoZ+V/WqXb8hvsR4TW9Z/FzXjVmSxIADiNTnP3cnFbwoZVznI3zy2+KCmcYHQ49TjOKlQJnJIGcA75wBjnV9qaca6DMSQN/EAPjnVemtbmxuLG5mTEN/F9TbsDs8XePCc7cwVOfQg9as3EJO6RlQZfSxJxux513O2XA+77LcAeNcycES2hlIG/dTxpHIT/jC/nUXniE0jmVMikVPvRMyN9wiTGAf4h/nXUtWgJU6XG4z4h/KuJBcXRRFSWUA51DBcZG2cEH+jXUsppnK5uVLqSuho02z5bVeOFJjy7ulCIyGBwQQcjl5VuAYYBGQQTn4zWqJs51sCSBkYGD+VTIyrAkdOmKpMpa4D3FxDKvOGZJBjnhWDY2r0TIO45HcexqgLGO8ORswx88qvNm/eWlm55tBET76QKyyeW+Jvp0qdZtjpUUUDXn8UULz+KKDR1PvRSPM+9FSMhRvSp0BRRRUDn8bhE/B+LoRkraSzKP3oR3o/lXmtrpkjJXmrDb4zXrLRrKkkT/AHJUeJv4ZFKH+deQWGuMXELf3kNw8TbdYwUIP61pXhlk5dJATpI88HqBjO9S4coCcDGcfAqKrMcYx64HnUtSFidz5AgefWrQylzZ4i93w0ADVcXltGq7klWmRScV6feW0F7b3lpOuqC6ilglG2dMgIyM9RzHtXmlk4m43wDJzovbbbbkZMjNeo1GTmGuLiXhF5YXPCeIXnD7jWJYJSFZDp1DmsqHyIwwrfbyys2gyAyKR4JlAYj0P+9Xnt/wb6i1t+MQJmexxFdYGS9sx8LH+EnHs3pXnaSSIY1kAljA2J2dN+jc61pO2WSNLLC7eAkAMVwcbY+Kn20m5Ut6Z99hXHs5EkUFZC2kYKMPtF9a6SDZgOfhI8/mkqQ6QyW5nO/znnVx4USeH2WTkiMrn+F2FUpGPhz6AY8+dXDgpzw6AZzpknX/APQnFY3bY+XS3p70qBWbdlSp0qBrz+KKF5/FFBHPM+9FB5mipDp0qBQOiiioBuN/KvLuLW/0fHePxKPA14lyn8NxGJtseRJFeo1Qe2Vt3XFba6X/AOZZxq2/4rZnTJHsRV6cs8nDnLkEdQwz154qShMqBOfgII89qgxPqEeo7jYZ6EVOt2Ecg9GyvlkjnVmMonDCo4/wKJCMm9g70+ZUFgox5Yr1Pyryrgkbf+6OFIRkLdO//RDKc16r5VGTlri4Q+K2jX3DOKWaf3lxaTxxf8zSWT9QK8NGQEkQsp2bDDIAO2lvblXvwOCD5EH8q8W4/wANueH8Z4tDAv2JupZUTdgElYSgMPIgjFTjnRkhhZvE7IrARyggrg7H+Bq70bNkZGSBg8gSBuKq0EsMhVV8EoJzFJ93I/YY13reXACtnYgYbmpxyyd62lzw6sZ1AMu/Ue9XPgjarBPSab05kNvVGifmBjmcb1c+zzhrOVdspOdXuyKaxvw1x8uzQKKBWToZUqKKBrzooXn8UUEfqfeil1p0DoHSlT8qkOiiioBVG7bsRecK8vo5se/e4q81Q+3OTfcFUDnazfrLV6cqZP1cGJgefVcfO1ShMFkQDfluPIcqgK2JG9NiB+7itjvpJb9nTyPI/FaxDnl0ODxM/arhrR/glmlby0C3lDfzr02vO+ytwBx9Edf7+0uURuhICybf9Jr0Ss8nLfHwwlmgt4pp55FighjeWaRzhUjQZLGvF+L9pjxXi97ePGI7QtHa2aBNL9zETh5mX8Rzk5zjl0zVp7dcbS4jbgtoxKJMr38iN4WePOINvI7t6gDpXnDRkknAAyeY2ZthVqV1G1L23Pa6skVpcufEI3OCrbb9d6lW6XkajKlwvJlbUDjAHrXNiiu5MERrEnhw8+VLY2JAIz+ldISLBGFabJLDZR4iPRfKtpnbDWnRiuHXSJEKlhnOMZztvV37KMzwXz4OjXCoJ5FgGJA/MVRLCK84ncQW1tGzNICdz91RsWc8gB1r1Ph1jFw6zgtIzq7sEu+MGSRt2Yj+VY5Jjhtjid7TKKKKxdB0UUUDXnRQvOigjefvTrHqfc1lUgp0qKgMU6VOgKpHbhX+p4Oy4BMEwyfISj/WrvVP7cZA4I6gZBv0354IhO1Xpypf9VIJ8ZwfvZznnTlm2YZGx9jUIyMpYknIwf8AKtMk5wQfU/PrXTpy7WPs7Kx45wJlYafqyreYLRSJg/nV07UdoE4Vbm0tnxxG6jOllOPpomyvekjfUdwn59MHzHgt+LXiNlO2rTbXVvdy6MZ7qFwXAztuNh71nfXl1xG7vL6bLS3ExmbVnChtkjXJ5AAAb8l8+ec13bctK21XTUXiTWdDN97JYnJJG5HXNaGu5wp0qsa74EYAI3ycN979etOTLBASSAACepPxWGhjpzvv/RrWIZTJq075IJGd2OTqPux3rdbwSSyxRJG8kkrLHEiDLvIxwFUetEanCgcidRHLl/Rr0TsdwH6eNOL3cYE8qMLJGG8UL85Tn8TdPIfxbRa0VjaaxNp07XZ/gkXBrNUOlryZQ13IP2uYjQ/sr+vP27NIU65JnfmXZEajUHRRRUJOilQKDJedFC8/iiginmfemOlY9aflUjKjyooqAU80qKDKqd26YJFwJznH1N1Gd9vEkbb/AJVcKp3/ABEGOCWNwMf2fisBbJ2xJFIm+PirU/aFb/rLzyQ4MgHQn+ZFQH7yWRY4xlm39FG2SfQVtmuVV5w2wxq38mG1EKSRLG7bPJkkEbrlTpU/5118uThlEgibQASx1ZJ5nA29KkthAuMElSdQ6557/wBcvWo8bId2+9srb8iTQ8hLY/Z2HtVfafTblUUnGdht5ZojDN575x7elYRgscucA7gfPKuvw6xuLmeG2t0D3M7hYVb7qjmZJP3VG5/rN96V063ZfgQ4jdCWdf7JbFJJx0kY+JIfnm3p/FXp/sAPIDkPaofDbCDhtnBaQksEBaSRgA00rbvI3qf9B0qZXJe3dLrpXtgU6KdUXFFFFAUUUUDXn8UULz+KKCJ1NOl1PvToMqdY0waB0UUUBVa7cpBJ2bv4XlijllltGtRK2C8kc6MwUDc4GSakdoO0dtwOFAkYuL2bJihyQiKAfHKRv02Gf9/MeK8Xv+LXhurxwWI0RogIigj6JGpJwPPc1pjr3eWeS2o05SxIsshCGR4YowzsMtg53VeWdq369YwmT1UjyI6+tML9s08bHdVR9QGCRkcsjP8AXzJB2dY1UAkMzaRhQPxDaunjhy/6gtGQ2FGccyORz1B/KtyRaRrlOTthfxHyzWwsqjSmSScszbkn5rOJCMyPux3XP8zSI0bbYolGJHHiI8C4yFH7RH8q9M7McEPDbc3VyuL67Qaw2NUEP3hF7nm3rt+GuR2V7PuzQ8Uv0IUES2cLjd25rM4PQfgHz0GbzWGS+/EOjHT3Ip0qKxbHTpUUGVKiigdKiigyXn8UUl5/FFBE6mjNY7Z/OnnlQZ0VjmnQZb1i5Ok49PyzRmjbcUkUHthbyrcC4UBi0UUkQbkWj+zYH4/nVHaCQCQlcJGdi3WMsdLY54/rntXrfHrD66zmjAzLDmaHzOB4lHuP1ArzK+guCIBHoCjK5IJyPbOPLbapxX14Vy03+SCzjwgLsM4GdwDvgmszI7IADhSR845fFQXklQ5MeRgnYMG0jmWU5IxWyG6iYrkldsbjwnPqK7ImHJMSmxr+I8jVq7KcHt+JXs0t26NHw8QSPak5aR5dRjMg/Z2JI6+33qdNeJE5ij+1l0a8x4aOFeWT0Lf0fKrD2J4nb2fFSGdtN6v09xrPiDs4KO3z/wB1VvPjwmkeYmXrdMVjTrkdh06xzRmgyo3rHIoyKDLejelkUZFA96N6xzRmgzXOfiisVO/xRQQydzRqrUTuaWTQb9VZBqj6qYagkZp5rQGFZaqByDI1Dmu/xXn/AB2yFleyBV+wn+3iHQBj4lHsa9ABFcLtLaCbh4uAAWs5Vc+fdORG366TWdo1O16y89uLSGUNIqAkK224bRsTgjccq4V5dWykxwoWuCoVX0qFDOobOpGGSP4BvVqkDKo0Td06+NWjVGJG/gYNkYqocRSWW4nlnkDTSzOzkKAQyEKWCryBBGPataWnhS9Y5SOFwLGsrOytIU0YHQHc7VJa2e2uPqYMjMDMVUkFH0nG+K5UUTgp3du+sYxI7uhJ8yFrqRXN7pxLHE8bOiSBCyuoJ0hlL7dfT9a6Y1rTkne9vcLC4+qseH3J53FpbTsf3pI1Y/rUnNcTsuxbgXClLK3cpNb6lzgiKZ0GAfTFdoVzT4l1VncbZUUqdQkqN6KKB0UqKB0t6KKBqTn4ooXn8UUEAg5NY1IZNzWJSg0kUsmthSsCpFAsmstVazmlk0G8NTdI54p4JP7uaN4n9FdSpPxzrQGrIS4Iqto3CYeeXULxGWBxoeJ3icAAeNDg8qrPGImi/wDT5FBUyd/E7qB0AcajXpPaOwXWL9FysulLjH4ZANKufRtgfUfvVT7xLeRWt54O9BSRotLEPFIhQiRQN8/hxv8Af5GorOp2taNxpW5Z9MUUMY1zM2hUDl2QqdRLRJk5zkDO/pip9ql3AsgnSIXBh+ohM/2IkMeovboO7HiOxXJ5jkc7WGzsHjf6y4RI2Uube3iXCw95nUzdS5yfbJ6sSer3SXdrNauwVpBqhkK6limXdHIOxwcZHUZHWrTeVPrh1+xMkUnB3EZzpvJSwVtcYZ443zG45g5yRgEEkEAirSKi2LM9lYu8fdu1tC0kf7DlBqX881J8qTO/KIjXhlRSook6KVFA6VOipBSp0qBrz+KKF50UGJG596WkVkSMn3p0Q1lPSsSg8q3UqJaDCprAwA1K2pYqBENsehrE20vln2NTcUzmg5728jRyRSQ95E6sjo2CrKeakZqoR8FkHFL5lFxEiQRJbfVRqNQZ2LjUpyeS4PP3zmr9Wt4opBiRFb3G49iN6pNf4Wi2lTbg/EZBhDB/iZv0Gms4uCcZGx+l0nqJnzj20VZfpIttL3CY/YlOP/uDWxYdPOadv43H/ioqNSnuhhaxvFb28TnLRxqjEdSB61vGaYAG1PFXhRjvTp0VIVFOigKN6KKkFKnSqEGvOihedFBieZ96BRRUh0UUVAKKKKAp0UUCo8qKKAp0UUCp0UUSKKKKkFFFFAUUUUBSooqA150UUUQ//9k=";
const img6 = "https://th.bing.com/th/id/OIP.oG4x2nhOaFUZ_Sgfti34PAAAAA?pid=ImgDet&rs=1"
const img7 = "https://blackberrys.com/cdn/shop/files/textured-leather-sneakers-in-white-qwhite-blackberrys-clothing-1.jpg?v=1685955622"
const Home = () => {
  const productList = [
    {
      name: "MacBook",
      price: 120000,
      imgSrc: img1,
      quantity: 8,
      id: "scsncjsdncjsdcj",
    },
    {
      name: "Black Shoes",
      price: 790,
      imgSrc: img2,
      quantity: 3,
      id: "sjhbjhbbjjkbj",
    },
    {
      name: "red Shoes",
      price: 490,
      imgSrc: img6,
      quantity: 3,
      id: "sjhbjhbbjjkbj",
    },
    {
      name: "white Shoes",
      price: 690,
      imgSrc: img7,
      quantity: 3,
      id: "sjhbjhbbjjkbj",
    },
    {
      name: "White T-shirt",
      price: 250,
      imgSrc: img3,
      quantity: 9,
      id: "sbhjbhbhjbjhb",
    },
    {
      name: "Blue Jeans",
      price: 1200,
      imgSrc: img5,
      quantity: 5,
      id: "shjbhjbjhwbwdu",
    },
    {
      name: "Red Jeans",
      price: 1120,
      imgSrc: img4,
      quantity: 4,
      id: "scsncjvvvhjcj",
    },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options)=>{
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added to Cart");
  };

  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          qty={i.quantity}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({name, price, id, quantity: 1, imgSrc })}>Add to Cart</button>
  </div>
);

export default Home;
