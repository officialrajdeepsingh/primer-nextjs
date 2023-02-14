import { Header, Box, ActionMenu, StyledOcticon, ActionList } from '@primer/react'
import { GoMarkGithub } from "react-icons/go";
import { useTheme } from '@primer/react'


export default function Navbar() {
    const { setColorMode } = useTheme()

    return (
        <>
            <Header sx={{
                justifyContent: 'center',
                padding: '10px'
            }}>

                <Header.Item>

                    <Header.Link href="#" fontSize={2}>

                        <StyledOcticon icon={GoMarkGithub} size={32} sx={{ mr: 2 }} />

                    </Header.Link>

                </Header.Item>

                <Box sx={{
                    justifyContent: 'center',
                }} display={`flex`} width={1224}>

                    <Header.Item>Home</Header.Item>

                    <Header.Item>About</Header.Item>

                    <Header.Item>Contact</Header.Item>

                </Box>

                <Header.Item mr={0}>

                    <ActionMenu>
                        <ActionMenu.Button>Light</ActionMenu.Button>
                        <ActionMenu.Overlay>
                            <ActionList>
                                <ActionList.Item onSelect={event => setColorMode("light")}>Light</ActionList.Item>
                                <ActionList.Item onSelect={event => setColorMode("dark")}>Dark</ActionList.Item>
                            </ActionList>
                        </ActionMenu.Overlay>
                    </ActionMenu>
                </Header.Item>

            </Header>

        </>
    )
}
