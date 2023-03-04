import React, { useContext, useState } from "react";
import * as S from "./styles";
import { ThemeContext, ThemeType } from "../../styles/themes/Theme";
import { TextInfo } from "../../components/TextInfo";
import { NumberSpan } from "../../components/NumberSpan";
import { Card } from "../../components/Card";
import { useTask } from "../../context/tasksContext";
import { FlatList, View } from "react-native";

export const Home = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  const isDarkMode = theme === ThemeType.dark;

  const { tasks } = useTask();

  const numberTasks = tasks.length;
  const doneTasks = tasks.filter((task) => task.isDone == true).length;

  return (
    <S.Container>
      <S.HeaderInfo task={numberTasks}>
        <S.ContainerInfo>
          <TextInfo text="Criadas" color="blue" />
          <NumberSpan number={numberTasks} />
        </S.ContainerInfo>
        <S.ContainerInfo>
          <TextInfo text="Concluídas" color="purple" />
          <NumberSpan number={doneTasks} />
        </S.ContainerInfo>
      </S.HeaderInfo>

      <S.FlatListCotainer>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={tasks}
          ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
          renderItem={({ item }) => (
            <Card text={item.title} id={item.uuid} isDone={item.isDone} />
          )}
          keyExtractor={(item) => item.uuid}
        />
      </S.FlatListCotainer>
    </S.Container>
  );
};
