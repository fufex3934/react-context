import { createContext,useContext,useMemo } from "react";
import { defineAbilitiesFor } from "../casl/ability";

const AbilityContext = createContext();

export const AbilityProvider = ({role,children})=>{
   const ability = useMemo(()=>defineAbilitiesFor(role),[role]);

   return (
    <AbilityContext.Provider value={ability}>
      {children}
    </AbilityContext.Provider>
   )
};

//custom hook
export const useAbility = ()=>useContext(AbilityContext);