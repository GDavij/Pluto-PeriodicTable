var LastClassRef = "None";
var LastSelected = "None";
const FetchJson = (query, search) => {
    fetch('public/json/ForkDatabase.json').then((ReqProto) => {
        return ReqProto.json();
    }).then((Res) => {
        if (query == 'generate') {
            GeneratePrototypeTable(Res);
        }
        else if (query == 'getta') {
            RequestsLeader(Res, search);
        }
    });
};
//Create Elements Buttons T-T
function GeneratePrototypeTable(dataFetch) {
    const ElementsGenerate = [2, 8, 8, 18, 18, 18, 18, 15, 15]; //The Partitions of it is the rows and the values:Number are the number of elements in every row
    let StartRelative = 0; //relative
    let DivInjekt = 0;
    for (let ARaygonium = 0; ARaygonium < ElementsGenerate.length; ++ARaygonium) { //Array
        if (ARaygonium != 0) {
            ++DivInjekt;
        }
        document.querySelector('#Elementaz').innerHTML += `<div id="Row${DivInjekt}" class="RowTemplate"></div>`;
        for (let zinc = 0; zinc < ElementsGenerate[DivInjekt]; ++zinc) {
            let LinesToInner = "";
            const InnerDiv = document.querySelector(`#Row${DivInjekt}`);
            //Conditions Reader
            if (dataFetch[StartRelative].name != 'Lanthanum Series' && dataFetch[StartRelative].name != 'Actinium Series') {
                let While = dataFetch[StartRelative].shells;
                for (let carbon = 0; carbon < While; ++carbon) {
                    LinesToInner = LinesToInner + `<p>${dataFetch[StartRelative].shells[carbon]}</p>`;
                }
                InnerDiv.innerHTML += `<button 
            id="${dataFetch[StartRelative].symbol}"
            class="${dataFetch[StartRelative].category} ElementTemplate"
            onclick="FetchJson('getta','${dataFetch[StartRelative].symbol}')">
            <p class="AtomicNumberArea">${dataFetch[StartRelative].number}</p>
            <p class="ShortHand">${dataFetch[StartRelative].symbol}</p>
            <p class="Name">${dataFetch[StartRelative].name}</p>
            </button>`;
            }
            else {
                InnerDiv.innerHTML += `<button 
                id="${dataFetch[StartRelative].symbol}"
                class="${dataFetch[StartRelative].category} ElementTemplate">
                <p class="AtomicNumberArea">${dataFetch[StartRelative].number}</p>
                <p class="ShortHand">${dataFetch[StartRelative].symbol}</p>
                <p class="Name">${dataFetch[StartRelative].name}</p>
                </button>`;
            }
            ++StartRelative;
        }
    }
}
FetchJson('generate', 'null');
const InnerData = (newData) => {
    const IndexDataArea = {
        Number: document.getElementById("Number"),
        Symbol: document.getElementById("Symbol"),
        Name: document.getElementById("Name"),
        Mass: document.getElementById("Mass"),
        Shells: document.getElementById("Shells")
    };
    //Inner Number
    IndexDataArea.Number.textContent = newData.number;
    IndexDataArea.Symbol.textContent = newData.symbol;
    IndexDataArea.Name.textContent = newData.name;
    IndexDataArea.Mass.textContent = newData.atomic_mass;
    IndexDataArea.Shells.innerHTML = "";
    for (let shell = 0; shell < newData.shells.length; ++shell) {
        IndexDataArea.Shells.innerHTML += `<p> ${newData.shells[shell]} </p>`;
    }
    const GeneralDataArea_Response = {
        //First Column
        Name: document.getElementById("ResNameDiv"),
        Symbol: document.getElementById("ResSymbolDiv"),
        Appearance: document.getElementById("ResAppearanceDiv"),
        Phase: document.getElementById("ResPhaseDiv"),
        IonizationEnergies: document.getElementById("ResIonizationEnergiesDiv"),
        //Second Column
        Discovery: document.getElementById("ResDiscoveryDiv"),
        Number: document.getElementById("ResNumberDiv"),
        Density: document.getElementById("ResDensityDiv"),
        EletronAffinity: document.getElementById("ResEletronAffinityDiv"),
        EletronNegativity: document.getElementById("ResElectronNegativityDiv"),
        EletronConfiguration: document.getElementById("ResEletronConfigurationDiv")
    };
    let ResDataQuality;
    GeneralDataArea_Response.Name.textContent = newData.name; //Quality 1
    GeneralDataArea_Response.Symbol.textContent = newData.symbol; // Quality 1
    ResDataQuality = newData.appearance;
    if (ResDataQuality === null) {
        ResDataQuality = "Does Not Has Data";
    }
    GeneralDataArea_Response.Appearance.textContent = ResDataQuality; // Quality 0.3 
    GeneralDataArea_Response.Phase.textContent = newData.phase; //Quality 1 
    GeneralDataArea_Response.IonizationEnergies.innerHTML = "";
    ResDataQuality = newData.ionization_energies;
    if (ResDataQuality.length === 0) {
        ResDataQuality = "Does Not Has Data";
        GeneralDataArea_Response.IonizationEnergies.innerHTML = ResDataQuality;
    }
    else {
        for (let Level = 0; Level < newData.ionization_energies.length; ++Level) { // Quality 0.1
            GeneralDataArea_Response.IonizationEnergies.innerHTML += `<p>Level(${Level + 1}): ${newData.ionization_energies[Level]}</p>`;
        }
    }
    GeneralDataArea_Response.Discovery.textContent = newData.discovered_by; //Quality 1
    GeneralDataArea_Response.Number.textContent = newData.number; //Quality 1
    GeneralDataArea_Response.Density.textContent = newData.density; //Quality 1
    ResDataQuality = newData.electron_affinity;
    if (ResDataQuality === null) {
        ResDataQuality = "Does Not Has Data";
    }
    GeneralDataArea_Response.EletronAffinity.textContent = ResDataQuality; //Quality 0.2
    ResDataQuality = newData.electronegativity_pauling;
    if (ResDataQuality === null) {
        ResDataQuality = "Does Not Has Data";
    }
    GeneralDataArea_Response.EletronNegativity.textContent = ResDataQuality; // Quality 0.2
    GeneralDataArea_Response.EletronConfiguration.textContent = newData.electron_configuration; //Quality 1
    const StyleIndex = newData.category;
    console.log(StyleIndex);
    let Color;
    /* I Hadn't Find Any other way to Switch Color
    Cause i need to conpare every Result to Pressume the Color
    Yeah it's not the best Practice Probally but i hadn't find any better till now
    */
    if (StyleIndex.includes('unknown') === true) {
        Color = "#888";
    }
    else if (StyleIndex.includes("Hydrogen") === true) {
        Color = "#f59";
    }
    else if (StyleIndex.includes("noble-gas") === true) {
        Color = "#50a";
    }
    else if (StyleIndex.includes("alkali-metal") === true) {
        Color = "#12f";
    }
    else if (StyleIndex.includes("alkaline-earth-metal") === true) {
        Color = "#5af";
    }
    else if (StyleIndex.includes("metalloid") === true) {
        Color = "#a02";
    }
    else if (StyleIndex.includes("nonmetal") === true) {
        Color = "#295";
    }
    else if (StyleIndex.includes("post-transition-metal") === true) {
        Color = "#a5a";
    }
    else if (StyleIndex.includes("transition-metal") === true) {
        Color = "#f54";
    }
    else if (StyleIndex.includes("lanthanide") === true) {
        Color = "#fa5";
    }
    else if (StyleIndex.includes("actinide") === true) {
        Color = "#f5f";
    }
    console.log(Color);
    const FooterDinamicStyle = document.querySelector("#FooterDinamicStyle");
    FooterDinamicStyle.innerHTML = `
    #Index{
        background: radial-gradient(#222, ${Color})
    }
    `;
};
const RequestsLeader = (dataFetch, Find) => {
    //Extract Find Relative in dataFetch
    let AcessElement;
    if (LastSelected != Find) {
        AcessElement = document.getElementById(`${LastSelected}`);
        AcessElement.style = " border:2px solid #fff;";
        LastSelected = Find;
        AcessElement = document.getElementById(`${LastSelected}`);
        AcessElement.style = " border:2px solid #f08;";
    }
    let ExtractTerm;
    for (let hydrogen = 0; hydrogen < dataFetch.length; ++hydrogen) {
        const Finder = dataFetch[hydrogen];
        if (Finder.symbol == Find) {
            ExtractTerm = dataFetch[hydrogen];
            stop();
        }
    }
    InnerData(ExtractTerm);
};
LastSelected = 'H';
FetchJson('getta', 'C');
