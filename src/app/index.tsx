




import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { COLORS, SPACING } from "../constants/theme";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.content}>
        <Text style={styles.emoji}>mony</Text>
        <Text style={styles.title}>Expense Tracker</Text>
        <Text style={styles.subtitle}>No expense yet</Text>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: SPACING.lg,
    gap: SPACING.sm,
  },

  emoji: { fontSize: 72, marginBottom: SPACING.sm },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: COLORS.text,
    letterSpacing: -0.5,
  },

  subtitle: { fontSize: 15, color: COLORS.textMuted, textAlign: 'center' },
});
