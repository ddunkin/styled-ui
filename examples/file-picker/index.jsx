import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom';
import { Box } from '@faithlife/styled-ui';
import { FilePicker } from '@faithlife/file-picker';

const App = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggleIsOpen = useCallback(() => {
		setIsOpen(previousState => !previousState);
	}, []);
	const handleCancel = useCallback(() => {
		setIsOpen(false);
	}, []);

	const [selectedFile, setSelectedFile] = useState(null);
	const updateSelectedFile = useCallback(selectedFiles => {
		const firstAsset = selectedFiles.assets[0];
		setSelectedFile(firstAsset);
		setIsOpen(false);
	}, []);

	const selectedFileBackground = selectedFile && selectedFile.file && selectedFile.file.url;

	return (
		<Box
			display="grid"
			top={0}
			left={0}
			right={0}
			minHeight="50vh"
			position="absolute"
			alignItems="center"
			justifyContent="center"
		>
			<Box
				onClick={toggleIsOpen}
				width={480}
				height={270}
				border="2px dashed"
				borderColor="blue4"
				display="grid"
				alignItems="center"
				justifyContent="center"
				color="blue4"
				fontWeight="bold"
				backgroundImage={selectedFileBackground ? `url(${selectedFileBackground})` : null}
				backgroundPosition="center"
				backgroundSize="cover"
				backgroundRepeat="no-repeat"
			>
				{!selectedFileBackground && '+ Add photo'}
			</Box>
			<FilePicker
				isOpen={isOpen}
				onClose={handleCancel}
				title="File Picker"
				onFilesSelected={updateSelectedFile}
				onCancel={handleCancel}
			>
				<FilePicker.AmberTab title="Group Vault" accountId={9863513}>
					Hi there!
				</FilePicker.AmberTab>
				<FilePicker.Tab title="three">Привет!</FilePicker.Tab>
			</FilePicker>
		</Box>
	);
};

ReactDOM.render(<App />, document.querySelector('#app'));
