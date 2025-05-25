import React, { useState } from "react";
import { View, Text, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBR } from "./localeConfig";


export function ModalDate({visible, filter}){

    LocaleConfig.locales["pt-br"] = ptBR;
    LocaleConfig.defaultLocale = "pt-br";
    

    const [dateNow, setDateNow] = useState(new Date());
    const [markedDates, setMarkedDates] = useState({});


    function handlerOnDayPress(date){
        
        setDateNow(new Date(date.year, date.month-1, date.day));

        let selectDate = {};
        selectDate[date.dateString] = {
            selected: true
        };
        
        setMarkedDates(selectDate);
        
    }

    function filteDate(){
        filter(dateNow);
        visible();
    }


    return (
        <View style={styles.container}>

            <TouchableWithoutFeedback onPress={() => visible()}>
                <View style={styles.closeModal}></View>
            </TouchableWithoutFeedback>

            <View style={styles.sectionDate}>
                <Calendar
                    onDayPress={handlerOnDayPress}
                    markedDates={markedDates}
                    enableSwipeMonths={true}
                    theme={{
                        todayTextColor: "red",
                        selectedDayBackgroundColor: "blue",
                        selectedDayTextColor: "white"
                    }}
                />

                <TouchableOpacity
                    onPress={filteDate}
                    style={styles.button}>
                    <Text style={styles.textButton}>Filtrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}