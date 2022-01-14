function nolasa() {
    const malas = document.getElementsByClassName("mala");
    const m1 = parseFloat(mala1.value);
    const m2 = parseFloat(mala2.value);
    const m3 = parseFloat(mala3.value);
    if (m1 > 0 && m2 > 0 && m3 > 0) {
        console.log({ m1, m2, m3 });
        return { m1, m2, m3 };
    } else {
        console.log(false);
        return false;
    }
}
function perimetrs(m1, m2, m3) {
    const m = nolasa();
    m1 = m.m1; m2 = m.m2; m3 = m.m3;
    console.log(m1, m2, m3);
    const p = m1 + m2 + m3;
    console.log(p);
    return p;
}
function laukums(m1, m2, m3) {
    const m = nolasa();
    m1 = m.m1; m2 = m.m2; m3 = m.m3;
    const pusp = perimetrs(m1, m2, m3) / 2;
    let l = Math.sqrt(pusp * (pusp - m1) * (pusp - m2) * (pusp - m3));
    console.log(l);
    return l;
}
function irTrijsturis(m1, m2, m3) {
    if (m1 < m2 + m3 && m2 < m1 + m3 && m3 < m1 + m2) {
        return true;
    } else {
        return false;

    }
}
function rezultats() {
    const m = nolasa();
    m1 = m.m1; m2 = m.m2; m3 = m.m3;
    console.log(m1, m2, m3);
    if (!nolasa()) {
        t = "Dati nav pareizi, trijsūta malu garumi nevar būt nulle vai mazāki par nulli";
    } else {
        if (irTrijsturis(m1, m2, m3) == false) {
            t = "Trijstūris neeksistē,jo jebkura 2 malu garumu summai ir jabūt lielākai par trešo malu!";
        } else {
            t = "Trijstūris ar malu garumiem " +m1+ " , " +m2+ " , " +m3+ " eksistē.";

            const p = perimetrs(m1,m2,m3);
            const s = Math.round(laukums(m1,m2,m3)*100)/100;
            t+= " Perimetrs ir "+p+" un laukums ir "+s+".";
            }
        }
        console.log(t);
        return t;
    }
    function izvadaTekstu(){
        const teksts = rezultats();
        console.log(teksts);
        const y = document.getElementById("izvade");
        const u = document.createElement("p");
        y.innerHTML = teksts;
        y.appendChild(u);
    }



