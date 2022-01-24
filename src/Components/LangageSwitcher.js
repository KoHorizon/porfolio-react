import { useContext } from "react";
import { GarbageContext } from "../Providers/GarbageProvider";
import './Styles/LangageSwitcher.css'


export default function LangageSwitcher () {

    const { setChangeLanguage , changeLangage } = useContext(GarbageContext);

    return(
        <>
              <div class="switch-button">
                <input class="switch-button-checkbox" type="checkbox" onClick={() => setChangeLanguage(!changeLangage)}></input>
                <label class="switch-button-label" for=""><span class="switch-button-label-span">FR</span></label>
              </div>
        </>
    )
}