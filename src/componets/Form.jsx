import React from "react";
import axios from "axios";

import {
  Flex,
  Box,
  Input,
  Stack,
  Button,
  Heading,
  Select,
} from "@chakra-ui/react";
import AllUser from "./AllUser";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      details: {
        name: "",
        email: "",
        number: "",
        city: "",
      },
      allUserData: [],
      update: false,
    };
  }
  handleInput = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      details: { ...this.state.details, [name]: value },
    });
  };

  handleSubmit = () => {
    console.log(this.state.details);
    axios
      .post("https://tubelightassignment.herokuapp.com/details", this.state.details)
      .then((res) => this.setState({ ...this.state, update: true }))
      .catch((err) => console.log(err));
  };
  handleSort = (e) => {
    let sort = e.target.value;
    axios
      .get(`https://tubelightassignment.herokuapp.com/details?_sort=name&_order=${sort}`)
      .then((res) => this.setState({ ...this.state, allUserData: res.data}))
      .catch((err) => console.log(err));
  };
  componentDidMount = () => {
    axios
      .get("https://tubelightassignment.herokuapp.com/details")
      .then((res) => this.setState({ ...this.state, allUserData: res.data }));
  };
  componentDidUpdate = () => {
    console.log("hello");
    if (this.state.update) {
      axios
        .get("https://tubelightassignment.herokuapp.com/details")
        .then((res) =>
          this.setState({ ...this.state, allUserData: res.data, update: false })
        );
    }
  };

  render() {
    return (
      <>
        <Select onChange={this.handleSort}>
            <option value="">sort</option>
            <option value="asc">asc</option>
            <option value="desc">desc</option>
          </Select>
        <Flex align={"center"} justify={"center"}>
            
          <Stack spacing={8} mx={"auto"} maxW={"2xl"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Form</Heading>
            </Stack>
            <Box
              border="1px solid #4299e1"
              borderRadius="15px"
              width="100%"
              p="16"
            >
              <Stack spacing={8} width="100%">
                <Input
                  type="text"
                  placeholder="enter name"
                  name="name"
                  value={this.state.details.name}
                  onChange={this.handleInput}
                />

                <Input
                  type="email"
                  placeholder="enter email"
                  name="email"
                  value={this.state.details.email}
                  onChange={this.handleInput}
                />

                <Input
                  type="number"
                  placeholder="enter number"
                  name="number"
                  value={this.state.details.number}
                  onChange={this.handleInput}
                />

                <Input
                  type="text"
                  placeholder="enter city"
                  name="city"
                  value={this.state.details.city}
                  onChange={this.handleInput}
                />

                <Stack spacing={10}>
                  <Button
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    onClick={this.handleSubmit}
                  >
                    submit
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
        <Stack>
          <AllUser allUserData={this.state.allUserData} />
        </Stack>
      </>
    );
  }
}

export { Form };
