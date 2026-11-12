import { StyleSheet } from 'react-native';

import { colors, spacing } from '@/constants/theme';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: colors.background,
  },

  content: {
    flexGrow: 1,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },

  brandMark: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: colors.ink,
    alignItems: 'center',
    justifyContent: 'center',
  },

  eyebrow: {
    color: colors.primary,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.5,
  },

  title: {
    flex : 1,
    textAlign: 'center',
    color: colors.ink,
    fontSize: 25,
    fontWeight: '900',
    marginTop: 6,
    marginBottom: 6,
  },

  apiBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 7,
    paddingHorizontal: 9,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },

  apiDot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: colors.success,
  },

  apiText: {
    color: colors.success,
    fontSize: 10,
    fontWeight: '900',
  },

  subtitle: {
    textAlign: 'center',
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 21,
    marginTop: 12,
  },

  supportedRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 15,
  },

  supportedPill: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 9,
    borderRadius: 10,
    backgroundColor: colors.surfaceMuted,
  },

  supportedCode: {
    color: colors.primaryDark,
    fontSize: 12,
    fontWeight: '900',
  },

  supportedName: {
    color: colors.textMuted,
    fontSize: 10,
    marginTop: 2,
  },

  converterCard: {
    marginTop: spacing.lg,
    padding: spacing.lg,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    shadowColor: colors.ink,
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.06,
    shadowRadius: 16,
  },

  cardHeadingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.lg,
  },

  cardKicker: {
    color: colors.accent,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.4,
  },

  cardTitle: {
    color: colors.ink,
    fontSize: 19,
    fontWeight: '900',
    marginTop: 4,
  },

  inputLabel: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.8,
    marginBottom: 7,
  },

  amountField: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 57,
    paddingHorizontal: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },

  amountInput: {
    flex: 1,
    minHeight: 55,
    color: colors.ink,
    fontSize: 17,
    fontWeight: '700',
    marginLeft: 10,
  },

  helperText: {
    color: colors.muted,
    fontSize: 11,
    marginTop: 6,
    marginBottom: spacing.lg,
  },

  currencyRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
    marginBottom: spacing.md,
  },

  swapButton: {
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
    paddingHorizontal: 9,
    borderRadius: 12,
    backgroundColor: colors.primary,
  },

  swapText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: '900',
  },

  loadingLine: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: spacing.md,
  },

  loadingText: {
    color: colors.textMuted,
    fontSize: 12,
  },

  errorBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: spacing.md,
    padding: 10,
    borderRadius: 11,
    backgroundColor: '#3A252A',
  },

  errorText: {
    flex: 1,
    color: colors.danger,
    fontSize: 12,
    fontWeight: '700',
  },

  resultCard: {
    marginTop: spacing.md,
    padding: spacing.lg,
    borderRadius: 22,
    backgroundColor: '#0B1218',
  },

  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  resultKicker: {
    color: '#9CB8C7',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.3,
  },

  resultTitle: {
    color: colors.white,
    fontSize: 30,
    fontWeight: '900',
    marginTop: 5,
  },

  resultIcon: {
    width: 38,
    height: 38,
    borderRadius: 18,
    backgroundColor: colors.success,
    alignItems: 'center',
    justifyContent: 'center',
  },

  resultSummary: {
    color: '#C7DBE4',
    fontSize: 13,
    marginTop: 5,
  },

  resultDetails: {
    flexDirection: 'row',
    gap: 12,
    marginTop: spacing.lg,
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: '#355269',
  },

  detailItem: {
    flex: 1,
  },

  detailLabel: {
    color: '#9CB8C7',
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 0.8,
  },

  detailValue: {
    color: colors.white,
    fontSize: 12,
    fontWeight: '800',
    lineHeight: 17,
    marginTop: 5,
  },

  disclaimer: {
    color: '#9CB8C7',
    fontSize: 10,
    lineHeight: 15,
    marginTop: spacing.md,
  },

  emptyCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.md,
    padding: spacing.md,
    borderRadius: 18,
    backgroundColor: colors.surfaceMuted,
  },

  emptyIcon: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
  },

  emptyCopy: {
    flex: 1,
    marginLeft: 12,
  },

  emptyTitle: {
    color: colors.ink,
    fontSize: 14,
    fontWeight: '900',
  },

  emptyText: {
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 17,
    marginTop: 4,
  },

  footer: {
    color: colors.muted,
    fontSize: 10,
    marginTop: spacing.lg,
    textAlign: 'center',
  },

  pressed: {
    opacity: 0.72,
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 52,
    paddingHorizontal: spacing.lg,
    borderRadius: 14,
    backgroundColor: colors.primary,
  },

  buttonIcon: {
    marginRight: 8,
  },

  buttonLabel: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.2,
  },

  disabled: {
    opacity: 0.5,
  },

  pickerWrapper: {
    flex: 1,
  },

  pickerLabel: {
    color: colors.textMuted,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.8,
    marginBottom: 7,
    textTransform: 'uppercase',
  },

  pickerField: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 66,
    paddingHorizontal: 10,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },

  pickerCode: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '900',
  },

  pickerSpacer: {
    flex: 1,
  },

  pickerArrow: {
    color: colors.primary,
    fontSize: 10,
    marginLeft: 4,
  },

  currencyMark: {
    width: 'auto',
    minWidth: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 3,
    borderRadius: 10,
    backgroundColor: colors.surfaceMuted,
  },

  currencyMarkText: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: '900',
  },

  pickerCopy: {
    flex: 1,
    minWidth: 0,
    marginLeft: 9,
  },

  pickerName: {
    color: colors.textMuted,
    fontSize: 11,
    marginTop: 2,
  },

  pickerDisabled: {
    opacity: 0.55,
  },

  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
    backgroundColor: 'rgba(16, 35, 63, 0.48)',
  },

  modalCard: {
    width: '100%',
    padding: spacing.md,
    borderRadius: 22,
    backgroundColor: colors.surface,
  },

  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    padding: 4,
  },

  modalKicker: {
    color: colors.accent,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.2,
  },

  modalTitle: {
    color: colors.ink,
    fontSize: 20,
    fontWeight: '900',
    marginTop: 4,
  },

  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },

  closeText: {
    color: colors.textMuted,
    fontSize: 10,
    fontWeight: '800',
  },

  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    padding: 10,
    borderRadius: 13,
  },

  selectedOption: {
    backgroundColor: colors.surfaceMuted,
  },

  optionCopy: {
    flex: 1,
    minWidth: 0,
    marginLeft: 11,
  },

  optionCode: {
    color: colors.ink,
    fontSize: 15,
    fontWeight: '900',
  },

  optionName: {
    color: colors.textMuted,
    fontSize: 12,
    marginTop: 2,
  },

  selectedText: {
    color: colors.primary,
    fontSize: 10,
    fontWeight: '800',
  },
});
