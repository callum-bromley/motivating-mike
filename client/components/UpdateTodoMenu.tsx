import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Menu,
  MenuButton,
  ListIcon,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'

export default function UpdateTodoMenu() {
  return (
    <Menu>
      <MenuButton>
        <ListIcon as={ChevronDownIcon} marginRight="6" color="green.500" />
      </MenuButton>
      <MenuList>
        <MenuItem fontSize={16}>Change Urgency</MenuItem>
        <MenuItem fontSize={16}>Change Due Date</MenuItem>
      </MenuList>
    </Menu>
  )
}
