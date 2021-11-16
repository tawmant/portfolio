import React, { FC } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
  Box,
  Container,
  Heading,
  Flex,
  useColorModeValue,
  Stack,
  Link,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

type TLinkItem = {
  href: string
  path: string
  children: React.ReactNode
}

const LinkItem = ({ href, path, children }: TLinkItem) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha')
  return (
    <NextLink href={href}>
      <Box
        p={2}
        borderBottom={useColorModeValue(
          `${active && '1px solid blue'}`,
          `${active && '1px solid #fff'}`
        )}
        cursor="pointer"
      >
        {children}
      </Box>
    </NextLink>
  )
}

interface INavBarProps {
  path: string
}

const NavBar: FC<INavBarProps> = props => {
  const { path } = props
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      zIndex={1}
      style={{ backdropFilter: 'blur(10px)' }}
      {...props}
    >
      <Container
        maxW="container.md"
        display="flex"
        justifyContent="space-between"
        p={2}
        wrap="wrap"
        align="center"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          flexGrow={1}
          alignItems="center"
          mt={{ base: '4', md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default NavBar
