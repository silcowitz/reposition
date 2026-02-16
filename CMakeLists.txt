cmake_minimum_required(VERSION 3.12)
project(reposition)
set(LIB_NAME reposition)

set(Python_FIND_VIRTUALENV ONLY)
find_package(Python REQUIRED COMPONENTS Interpreter Development)

execute_process(
    COMMAND ${Python_EXECUTABLE} -c
            "import numpy; print(numpy.get_include())"
    OUTPUT_VARIABLE NUMPY_INCLUDE
    OUTPUT_STRIP_TRAILING_WHITESPACE
)


add_custom_command(
    OUTPUT ${CMAKE_BINARY_DIR}/${LIB_NAME}.c
    COMMAND ${Python_EXECUTABLE} -m cython
        --module-name ${LIB_NAME}
        ${CMAKE_SOURCE_DIR}/solve.pyx
        -o ${CMAKE_BINARY_DIR}/${LIB_NAME}.c
    DEPENDS ${CMAKE_SOURCE_DIR}/solve.pyx
)

add_library(${LIB_NAME} MODULE solve.c ${CMAKE_BINARY_DIR}/${LIB_NAME}.c)
target_include_directories(${LIB_NAME} PRIVATE ${Python_INCLUDE_DIRS})
target_include_directories(${LIB_NAME} PRIVATE ${NUMPY_INCLUDE})
target_include_directories(${LIB_NAME} PRIVATE ${CMAKE_SOURCE_DIR})
target_link_libraries(${LIB_NAME} PRIVATE ${Python_LIBRARIES})

set_target_properties(${LIB_NAME} PROPERTIES
    PREFIX "${Python_MODULE_PREFIX}"
    SUFFIX ".${Python_SOABI}${CMAKE_SHARED_MODULE_SUFFIX}"
)

