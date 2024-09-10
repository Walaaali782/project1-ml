import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

data = pd.read_csv("1-_mental-illnesses-prevalence.csv")

print("Displaying columns and rows:")
print(data.head()) 
print("\nGeneral Information:")
print(data.info())
print("\nOverall Prevalence Rates for Each Illness:")
prevalence_summary = data.describe()
print(prevalence_summary)

if 'Year' in data.columns:
 
    print("\nPrevalence Analysis Over the Years:")
    yearly_prevalence = data.groupby('Year').mean()
    print(yearly_prevalence)

plt.figure(figsize=(15, 10))
sns.barplot(data=data.mean().reset_index(), x=0, y='index', palette='viridis')
plt.xlabel('Average Prevalence')
plt.ylabel('Mental Illness')
plt.title('Average Prevalence of Mental Illnesses')
plt.show()

if 'Year' in data.columns:
    plt.figure(figsize=(15, 10))
    for illness in data.columns[1:]: 
        sns.lineplot(x='Year', y=illness, data=data, label=illness)

    plt.xlabel('Year')
    plt.ylabel('Prevalence')
    plt.title('Prevalence of Mental Illnesses Over Years')
    plt.legend(loc='upper left')
    plt.show()
