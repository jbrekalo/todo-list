import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput({
  onGoalInputHandler,
  onAddGoalHandler,
  onEndAddGoalHandler,
  resetTextInput,
  showModal,
}) {
  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={onGoalInputHandler}
          value={resetTextInput}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={onAddGoalHandler}
              color="#b180f0"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={onEndAddGoalHandler}
              color="#f31282"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
    color: "#120438",
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginBlockStart: 8,
    gap: 8,
  },
  button: {
    width: "100",
  },
});
