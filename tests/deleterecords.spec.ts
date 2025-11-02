import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://chris99-j.github.io/nursing-case/');
  await page.getByRole('textbox', { name: 'Patient Name:' }).click();
  await page.getByRole('textbox', { name: 'Patient Name:' }).fill('test1');
  await page.getByRole('spinbutton', { name: 'Age:' }).click();
  await page.getByRole('spinbutton', { name: 'Age:' }).fill('23');
  await page.getByLabel('Sex: Select Male Female Other').selectOption('Male');
  await page.getByRole('textbox', { name: 'Nursing/Nurse Diagnosis:' }).click();
  await page.getByRole('textbox', { name: 'Nursing/Nurse Diagnosis:' }).fill('test nursing diagnosis');
  await page.getByRole('textbox', { name: 'Nursing/Nurse Diagnosis:' }).press('Tab');
  await page.getByRole('textbox', { name: 'Doctor Diagnosis:' }).fill('test doctor diagnosis');
  await page.getByRole('textbox', { name: 'Doctor Diagnosis:' }).press('Tab');
  await page.getByRole('textbox', { name: 'History:' }).fill('test history ');
  await page.getByRole('textbox', { name: 'Case Summary:' }).click();
  await page.getByRole('textbox', { name: 'Case Summary:' }).fill('case summary test');
  await page.getByLabel('Status: Select Open In').selectOption('Open');
  await page.getByRole('textbox', { name: 'Assigned Nurse:' }).click();
  await page.getByRole('textbox', { name: 'Assigned Nurse:' }).fill('test nurse');
  await page.getByRole('button', { name: 'Add Case' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Delete' }).click();
});