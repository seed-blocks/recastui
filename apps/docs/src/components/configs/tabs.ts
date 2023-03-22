export const tabsSnippets = {
	import: `import { Tabs, TabList, Tab, TabPanelList, TabPanel } from "@recastui/react";`,
	usage: `
	<div className="container mx-auto p-6">
		<Tabs>
			<TabList>
				<Tab>Tab 1</Tab>
				<Tab>Tab 2</Tab>
				<Tab>Tab 3</Tab>
			</TabList>
			<TabPanels className="p-2">
				<TabPanel>
					Content for Tab 1
				</TabPanel>
				<TabPanel>
					Content for Tab 2
				</TabPanel>
				<TabPanel>
					Content for Tab 3
				</TabPanel>
			</TabPanels>
		</Tabs>
	</div>
`,
	orientation: `
<div className="container mx-auto p-6">
	<Tabs orientation="vertical">
		<TabList>
			<Tab>Tab 1</Tab>
			<Tab>Tab 2</Tab>
			<Tab>Tab 3</Tab>
		</TabList>
		<TabPanels className="p-2">
			<TabPanel>
				Content for Tab 1
			</TabPanel>
			<TabPanel>
				Content for Tab 2
			</TabPanel>
			<TabPanel>
				Content for Tab 3
			</TabPanel>
		</TabPanels>
	</Tabs>
</div>
`,
	variant: `
<div className="container mx-auto p-6">
	<Tabs variant="outline">
		<TabList>
			<Tab>Tab 1</Tab>
			<Tab>Tab 2</Tab>
			<Tab>Tab 3</Tab>
		</TabList>
		<TabPanels className="p-2">
			<TabPanel>
				Content for Tab 1
			</TabPanel>
			<TabPanel>
				Content for Tab 2
			</TabPanel>
			<TabPanel>
				Content for Tab 3
			</TabPanel>
		</TabPanels>
	</Tabs>
</div>
`,
	rounded: `
<div className="container mx-auto p-6">
	<Tabs variant="pills" rounded="full">
		<TabList>
			<Tab>Tab 1</Tab>
			<Tab>Tab 2</Tab>
			<Tab>Tab 3</Tab>
		</TabList>
		<TabPanels className="p-2">
			<TabPanel>
				Content for Tab 1
			</TabPanel>
			<TabPanel>
				Content for Tab 2
			</TabPanel>
			<TabPanel>
				Content for Tab 3
			</TabPanel>
		</TabPanels>
	</Tabs>
</div>
`,
};
