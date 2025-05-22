import React, { useMemo } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";


export function Balance({ data }){

    const labelName = useMemo(() => {
        if(data.tag === "saldo"){
            return{
                label: "Saldo",
                color: "#3B3DBF",
            }
        }
        if(data.tag === "receita"){
            return{
                label: "Entradas de hoje",
                color: "#00B94A",
            }
        }
        if(data.tag === "despesa"){
            return{
                label: "Despesas",
                color: "#EF463A",
            }
        }
    }, [data]);

    return(
        <View style={[styles.container, {backgroundColor: labelName.color}]}>
            <Text style={styles.label}>{labelName.label}</Text>
            <Text style={styles.saldo}>R$ {data.saldo}</Text>
        </View>
    );
}