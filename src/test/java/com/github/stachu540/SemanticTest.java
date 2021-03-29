package com.github.stachu540;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class SemanticTest {
    @Test
    @DisplayName("Should print Hello World")
    public void shouldPrintHelloWorld() {
        String hello = "Hello World";

        assertEquals("Hello World", hello);
    }
}
